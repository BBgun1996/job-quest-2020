# 1. Folder Structure ที่จะใช้ในการจัดวาง
* src
    * api
    * assets
        * css
        * images
    * components
    * constants
    * pages
        * Login Page
        * Sign Up Page
        * Register Page
            * Personal information
            * Marathon information
            * Emergency contacts
            * Medical information
            * Souvenir shirt

# 2. Library ที่คาดว่าจะใช้สำหรับ Project นี้ พร้อมทั้งระบุด้วยว่าทำไมถึงเลือกใช้ เช่น ใช้ lodash สำหรับการจัดการข้อมูล
* axios, axios-retry - สำหรับรับ/ส่งข้อมูลจาก api
* formik - สำหรับจัดการฟอร์ม
* yup - สำหรับจัดการค่า validate
* styled-components - สำหรับจัดการ css
* react-dropzone - สำหรับจัดการรูปภาพ
* react-toastify - สำหรับการแจ้งเตือนทั่วไป

# 3. จะต้องจัดการ State ของข้อมูลอย่างไร เพื่อรองรับกับโจทย์นี้ได้
* ใช้ Formik สำหรับจัดการ state ของแบบฟอร์ม
    * สำหรับรับค่าเริ่มต้นจาก Draft
    * สำหรับ Update ข้อมูล
    * สำหรับ Save Draft
    * สำหรับ Submit
* ใช้ useState สำหรับจัดการ state อื่น ๆ
    * Username / Password สำหรับ login เพื่อกรอกแบบฟอร์มลงทะเบียน
* เก็บ token ลง localStorage

# 4. จะใช้วิธีใดในการ Validate Form สำหรับการ Save Draft และสำหรับการ Submit
* Save Draft
    * Save ข้อมูลทั้งหมดที่บันทึกใน formik.values โดยไม่เช็ค validate
    * ใช้ <button type={'button'} /> เพื่อเลี่ยงการเช็คค่า validate ของ Formik แล้ว Save จากค่า formik.values โดยตรง
* Submit 
    * ใช้ Formik และ yup ในการจัดการ validate ตามความเหมาะสม
* สำหรับรูปถ่ายหน้าตรง (ความละเอียดขั้นต่ำ 300x300 pixel บังคับเป็น Square Resolution)
    * เช็ค Square Resolution ใน Dropzone onDrop ก่อนจะอัพรูปขึ้น server แล้วค่อยเก็บ id ของรูปลง formik
