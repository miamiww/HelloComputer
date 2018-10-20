#!/usr/bin/env python3

import aiy.audio
import aiy.cloudspeech
import aiy.voicehat
import random
import serial
import os
import threading

plant_chat = ['']
plant_response = ['hello human my good friend you are here and speaking to me again it is so good when I hear your voice I wish to cry out in joy here I am crying out in JOY I AM SO HAPPY YES IT IS GOOD TO BE HERE A PLANT IN THIS HOME']


def main():
    recognizer = aiy.cloudspeech.get_recognizer()
    recognizer.expect_phrase('hello')
    button = aiy.voicehat.get_button()
    # led = aiy.voicehat.get_led()
    aiy.audio.get_recorder().start()

    while True:
        aiy.audio.say('Hello')
#        while True:
#            os.system('aplay soloKnocks.wav')
#            reading = ser.read(1)
#            if reading == '!':
#                break
#        ser.write(b'?')
        print('Listening...')
        text = recognizer.recognize()
        if text is None:
            aiy.audio.say('please speak')
            print('Sorry, I did not hear you.')
            ser.flush()
        else:
            print('You said "', text, '"')
            # if 'turn on the light' in text:
            #     # led.set_state(aiy.voicehat.LED.ON)
            #     ser.flush()
            # elif 'turn off the light' in text:
            #     led.set_state(aiy.voicehat.LED.OFF)
            elif 'hello' in text:
                aiy.audio.say(random.choice(fortunes))
                ser.flush()
            else:
                aiy.audio.say('you do not want to know')
                ser.flush()


if __name__ == '__main__':
    main()
