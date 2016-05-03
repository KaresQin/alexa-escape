# alexa-escape

use this command to export mp3 files : 
>ffmpeg -i input_xxx.mp3 -ac 2 -codec:a libmp3lame -b:a 48k -ar 16000 output_xxx.mp3
