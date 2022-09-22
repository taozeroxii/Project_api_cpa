## Api สำหรับโปรแกรมที่ต้องการขอข้อมูลจากระบบ His hosxp v4 Postgresql 

   ดึงข้อมูลจากชุดคำสั่ง query ใน ฐานข้อมูล โดยมีการส่ง parameter พวกวันที่สิทธิเวลา และยิงชุด query ไปดึงข้อมูลเพื่อมาปั่นเอาค่าที่ได้ response ให้โปรแกรมที่ต้องการแบบ json


วิธีใช้งาน 
1.npm i ติดตั้ง package ทั้งหมด
2.config env file  
    - mycon สำหรับเชื่อต่อ backend การทำงานต่างๆ ของ api
    - pgcon สำหรับเชื่อมดึงฐานข้อมูล postgre sql his  hosxp รพ
3.npm run dev ทดสอบรันการใช้งาน