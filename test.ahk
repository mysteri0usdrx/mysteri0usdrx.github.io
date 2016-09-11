#persistent yes
#singleinstance force

heroes := {"0xC2CFD2" : "Anna", "0x8C9091" : "Bastion"}



#n::
PixelGetColor, playerOne, 501, 357
PixelGetColor, playerTwo, 686, 357
PixelGetColor, playerThree, 871, 357
PixelGetColor, playerFour, 1056, 357
PixelGetColor, playerFive, 1241, 357
PixelGetColor, playerSix, 1426, 357
FileDelete, output.txt
FileAppend, %playerOne%`,%playerTwo%`,%playerThree%`,%playerFour%`,%playerFive%`,%playerSix%, output.txt





return