## Api สำหรับโปรแกรมที่ต้องการขอข้อมูลจากระบบ His hosxp v4 Postgresql 

   ดึงข้อมูลจากชุดคำสั่ง query ใน ฐานข้อมูล โดยมีการส่ง parameter พวกวันที่สิทธิเวลา และยิงชุด query ไปดึงข้อมูลเพื่อมาปั่นเอาค่าที่ได้ response ให้โปรแกรมที่ต้องการแบบ json


## วิธีใช้งาน  ##

     1.npm i ติดตั้ง package ทั้งหมด
     2.config env file  
         - mycon สำหรับเชื่อต่อ backend การทำงานต่างๆ ของ api
         - pgcon สำหรับเชื่อมดึงฐานข้อมูล postgre sql his  hosxp รพ
     3.npm run dev ทดสอบรันการใช้งาน

## โครงสร้าง table Mysql cpa_report_url_api table หลักใช้เก็บ query api และ link url (router api)

  id          
  url           url route api สับแรก
  name          ชื่อ api หรือ note
  methods       method
  sql_query     คำสั่งดึงข้อมูล
  token_type    ประเภทtoken
  token         token
  token_expire  หมดอายุtoken
  time_stamp    เวลาแก้ไขข้อมูลล่าสุด
  status        สถานะใช้งาน api

## paramitor พื้รฐานที่ใช้งานได้ใส่ใน query เพื่อทำการ replace ค่าที่ผู้ใช้งานกรอกเข้าไป
 {hn}  
 {vn}  
 {an}  
 {sdate}  
 {edate}  

หมายเหตุ

     ** เหลือการพัตนาส่วนการ authen เข้าสู่ระบบ และการจัดการข้อมูล api ต่าง ๆ  **