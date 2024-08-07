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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347040882970";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_55_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODAsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDY3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE2LFxuICAgICAgICA0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI0LFxuICAgICAgICA3MixcbiAgICAgICAgNTgsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMixcbiAgICAgICAgMTE2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDY4LFxuICAgICAgICAzMixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNixcbiAgICAgICAgMTI1LFxuICAgICAgICA3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAwLFxuICAgICAgICAxODcsXG4gICAgICAgIDEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQ5LFxuICAgICAgICA5NixcbiAgICAgICAgNDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTY1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk5LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY4LFxuICAgICAgICA4MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTcwLFxuICAgICAgICA3MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDc5LFxuICAgICAgICAyNixcbiAgICAgICAgMTI4LFxuICAgICAgICA3MCxcbiAgICAgICAgNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAzNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDY5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjI0LFxuICAgICAgICA1NCxcbiAgICAgICAgNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDksXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQxLFxuICAgICAgICA0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1LFxuICAgICAgICAxMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTk2LFxuICAgICAgICA1LFxuICAgICAgICA2NixcbiAgICAgICAgOTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAzLFxuICAgICAgICAzNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc2LFxuICAgICAgICA0NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjMwLFxuICAgICAgICA2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjA2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExMixcbiAgICAgICAgODYsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjI2LFxuICAgICAgICAzNixcbiAgICAgICAgNDAsXG4gICAgICAgIDUxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5MixcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjI5LFxuICAgICAgICA1OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ1LFxuICAgICAgICA1NixcbiAgICAgICAgMzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDU1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjU0LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOGlvU1ZXaExlaHAwaU9CaVFNaU1MU2pHNTFpT0FrUUFiZXpqRE5ZUlNyOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRG9tQ0JuX1NSSmFCQkRxdjBtb0hNUVwiLFxuICBcInBob25lSWRcIjogXCI5OWI0Y2FiNS0wNGNiLTRkNzYtYmY4YS0xNWZlOTEyNWI0ZGZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY0LFxuICAgICAgNzcsXG4gICAgICAxMTIsXG4gICAgICAxOTQsXG4gICAgICAyNTIsXG4gICAgICAyMTUsXG4gICAgICAxMzQsXG4gICAgICAyOCxcbiAgICAgIDI1MixcbiAgICAgIDcsXG4gICAgICAyMzUsXG4gICAgICAxNjYsXG4gICAgICA5MyxcbiAgICAgIDU4LFxuICAgICAgMTgwLFxuICAgICAgNDAsXG4gICAgICAxNDQsXG4gICAgICA0LFxuICAgICAgMjgsXG4gICAgICAxMDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTksXG4gICAgICAyMTUsXG4gICAgICA2NSxcbiAgICAgIDQ4LFxuICAgICAgNTIsXG4gICAgICAxMCxcbiAgICAgIDU0LFxuICAgICAgNTQsXG4gICAgICAxNDcsXG4gICAgICAxNDIsXG4gICAgICAxMTYsXG4gICAgICAxMTAsXG4gICAgICAxMjEsXG4gICAgICAxOTgsXG4gICAgICAxNTcsXG4gICAgICAyMDcsXG4gICAgICAyMDUsXG4gICAgICAxNCxcbiAgICAgIDI0OSxcbiAgICAgIDE3M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxWVJKVFY2S1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA0MDg4Mjk3MDo5MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTY0MDg1MjY2MTU3NjkyOjkwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0l5R292b0VFS1AvbWJRR0dBd2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVi9BTFJHWWZwUkpsSW1nV3k1SEdqZjNYZ1hzKzN4WmQyajVrTlQxdDEyZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJheFJKVlVJMUZjaVc0MUVZNWZrM3Vwc1pnZlcvN1hNbDRTLytzYldjdDNqWVhSdkhpR0RoR0toclFtZWlXN1JPMzkyNEZoaUt3STdnc3g4VnhJd09Bdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJxdmZ6THNFL2d0VVFiU1JOVjVDdVFwS2NjdGdRaWozb0g1QjZlanpEVTZwQlpLOFdMSmYzRERXVktUcWR5bkJMdHZGSm1ocG4xaG95ekZRU3hHdzFDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDQwODgyOTcwOjkwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAwOTA1MzQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEWmVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURaZS5qc29uIjogIntcImtleURhdGFcIjpcInVoMVI4ZXlzd0ptMGtvS0xlNGtlb1Nqdno3RGxZU3JHbTVva0tyUDRrRXM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTMzMDE1MjIwNCxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyLDRdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
