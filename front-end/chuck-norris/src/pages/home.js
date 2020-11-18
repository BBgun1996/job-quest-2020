import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from "styled-components";
import PropType from "prop-types";
import { InputText, InputCheck, LoadingPage, LoadingContent, HoverButton } from "../components/index";
import { getJokeCount, getCategories, getRandomJokes } from "../api/API";

const HomePage = () => {

    useEffect(() => {
        getJokeCount().then(({ type, value }) => {
            if (type === "success") {
                setJokesCount(value);
                getCategories().then(({ type, value }) => {
                    if (type === "success") {
                        setCategory(value);
                    }
                    setLoadingPage(false)
                });
            } else {
                setLoadingPage(false)
            }
        });
    }, []);

    const [loadingPage, setLoadingPage] = useState(true);
    const [jokesCount, setJokesCount] = useState(0);
    const [category, setCategory] = useState([]);

    const [firstName, setFirstName] = useState("Tanaporn");
    const [lastName, setLastName] = useState("T.");
    const [limit, setLimit] = useState(3);
    const [selectedCategory, selectCategory] = useState([]);

    const [loadingContent, setLoadingContent] = useState(false);
    const [jokes, setJokes] = useState([]);

    const onSelectCategory = (value, checked) => {
        if (checked) {
            selectCategory((prev) => [...prev, value])
        } else {
            selectCategory((prev) => {
                return prev.filter(o => o !== value);
            })
        }
    }

    const randomJokes = () => {
        setLoadingContent(true);
        getRandomJokes({ limit, firstName, lastName, selectedCategory }).then(({ type, value }) => {
            if (type === "success") {
                toast.success(`Here a ${value.length} jokes for you !!!`);
                setJokes(value);
            } else {
                toast.error("Something error, Please try again.");
                setJokes([]);
            }
            setLoadingContent(false);
        })
    }

    return (
        <>
            {loadingPage ? <LoadingPage /> :
                (jokesCount <= 0) ? <LoadingPage error /> :
                    <>
                        <h1>Random {jokesCount} Jokes</h1>
                        <h4>from Chuck Norris</h4>

                        <Row>
                            <Row>
                                <p>First name :</p>
                                <InputText value={firstName} onChange={setFirstName} />
                            </Row>
                            <Row>
                                <p>Last name :</p>
                                <InputText value={lastName} onChange={setLastName} />
                            </Row>
                            <Row>
                                <p>Limit number of jokes :</p>
                                <InputText value={limit + ""} onChange={setLimit} type={"number"} min={1} max={jokesCount} width={100} />
                            </Row>
                        </Row>

                        {(category.length > 0) && (
                            <Row>
                                <p style={style.titleCheckBox}>Filter :</p>
                                {category.map(o => <InputCheck key={o} value={o} onChange={onSelectCategory} />)}
                            </Row>
                        )}

                        <HoverButton title={"Random"} color={"red"} width={400} onClick={randomJokes} disabled={loadingContent} />

                        {loadingContent ? <LoadingContent /> :
                            ((jokes.length > 0) && <BackgroundPage>
                                <h1>Result :</h1>
                                {jokes.map((o, i) => <p>{(i + 1) + ". " + o.joke.replace(/&quot;/g, `"`)}</p>)}
                            </BackgroundPage>)
                        }
                    </>
            }
            <ToastContainer autoClose={3000} />
        </>
    );
};

export default HomePage;

const style = {
    titleCheckBox: { margin: '0 25px' },
};

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  .body, p {
    margin: 7px 0 0;
    font-size: 15px;
  }
`;

const BackgroundPage = styled.div`
  background: white;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  padding: 30px 10px;
  margin: 30px 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  .body, p, h1 {
    color: black;
    margin: 7px 0 0;
    font-size: 15px;
  }
`;
