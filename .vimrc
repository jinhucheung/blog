"设置kumho用户的vim环境变量
set nu		 	"可以在每一行的最前面显示行号
set bg=light 	 	"显示不同的颜色色调
set showmode	 	"左下角显示状态
set ruler		 "右下角显示状态
set autoindent 		 "自动缩排
set backspace=2 	 "退格键可以删除任意值
set hlsearch 		 "高亮度反白
syntax on 	 	 "进行语法检验
"解决Vim中文乱码
set encoding=utf-8 	 "Vim内部使用的字符编码,比如脚本中的字符串,buffer,寄存器等
set termencoding=utf-8 	 "Vim用于屏幕显示的编码,显示时Vim将内部编码转出屏幕编码
set fileencoding=utf-8	 "Vim保存文件时的编码格式
set fileencodings=ucs-bom,utf-8,cp936,gb18030,big5,euc-jp,euc-kr,latin1 "Vim识别文件编码格式的识别序列，应当按照从严格到宽松的角度来摆放
