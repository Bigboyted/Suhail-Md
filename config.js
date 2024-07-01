const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_13_07_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDU0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDczLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU3LFxuICAgICAgICA0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAzNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDk2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjIwLFxuICAgICAgICA1NyxcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyNixcbiAgICAgICAgODcsXG4gICAgICAgIDk0LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1NixcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzksXG4gICAgICAgIDMyLFxuICAgICAgICAxODQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDk0LFxuICAgICAgICAyOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDksXG4gICAgICAgIDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTksXG4gICAgICAgIDU1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNixcbiAgICAgICAgNDgsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2MyxcbiAgICAgICAgODQsXG4gICAgICAgIDczLFxuICAgICAgICA0NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDksXG4gICAgICAgIDYzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDU1LFxuICAgICAgICAxNSxcbiAgICAgICAgNTksXG4gICAgICAgIDkwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjI2LFxuICAgICAgICA1NixcbiAgICAgICAgMjMxLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUDZ2bzF5Z00wcDNHSjhwdXlKTllZWGJnRlMvT3htNFF2bmdaRk1kYnRKRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUnh0VklmV1VUUU9PMV8xTXd4ckgwZ1wiLFxuICBcInBob25lSWRcIjogXCIyNDA4MmVhNi1mY2U5LTQzNTctODllZC0wNmE5N2M5OGRkMTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM3LFxuICAgICAgMTYsXG4gICAgICAyNTMsXG4gICAgICA1MixcbiAgICAgIDYsXG4gICAgICAxMjAsXG4gICAgICAxMjMsXG4gICAgICAxMzcsXG4gICAgICAxMDUsXG4gICAgICA3NCxcbiAgICAgIDEyMyxcbiAgICAgIDIxNyxcbiAgICAgIDIwMCxcbiAgICAgIDYyLFxuICAgICAgOTUsXG4gICAgICA1OCxcbiAgICAgIDI0OCxcbiAgICAgIDE3MixcbiAgICAgIDYxLFxuICAgICAgODhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzUsXG4gICAgICAzMSxcbiAgICAgIDI1MCxcbiAgICAgIDIwLFxuICAgICAgMjksXG4gICAgICAzOSxcbiAgICAgIDE2MyxcbiAgICAgIDE1MixcbiAgICAgIDM0LFxuICAgICAgMTU3LFxuICAgICAgNzUsXG4gICAgICA5NyxcbiAgICAgIDExOCxcbiAgICAgIDQyLFxuICAgICAgNjQsXG4gICAgICA3NixcbiAgICAgIDEzNCxcbiAgICAgIDE1MSxcbiAgICAgIDE3NyxcbiAgICAgIDIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjVRRFhUVDFTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQxMTUwMTg2MDI6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkJpZ2JveXRlZFwiLFxuICAgIFwibGlkXCI6IFwiNjY0NDc0NzI2NDAxNDg6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJK0NqdUlDRUtLaGlMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInIwUFpBTldPWnJqamhRV1JWTFRhRHdrMGNFakRlVU9mS0tjdDRlMnJ3bnc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiblY1cmY0Qko3LzRxK3N5ZWZNTDZhL3ZaVWp1KzZubWVGSFlFbjc3SVlZSVlPbzh1YkdTMldZa21MblRXak9iVUJLVnBqamlmODFHSjZsNnVqZ2ptQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRmdJelBMRHFLQzBHN0h4Y3pmMVZmbXY1UzNqODZycEJJLzdwZXE1VHJJQTZ5aFl1cFRNazlWS0dsTDVpSXc0UWVUNzJVR2JFVVZBUGJKazBHL0JmQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0MTE1MDE4NjAyOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5Nzk5OTczLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSENtXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIQ20uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJWK1RjK241UmZxVVAra2NoOE1Fd0d3R1lCaGE3SS9kZXRYVS9wZmlVQk9nPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjc0MjYyMTQ1NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTc5OTgxOTgyMlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
