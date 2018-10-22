#!/usr/bin/env python3

import aiy.audio
import aiy.cloudspeech
import aiy.voicehat
import random
import serial
import os
import threading

plant_chat = ['gregorios is alll here']
plant_response = ['hello human my good friend you are here and speaking to me again it is so good when I hear your voice I wish to cry out in joy here I am crying out in JOY I AM SO HAPPY YES IT IS good TO BE HERE A plant IN THIS HOME']
water_status = ['water is good I love water and my friend Alden brings me water', 'water', 'water is good for my roots', 'this water is good and I like the humidity in the air']

def main():
    recognizer = aiy.cloudspeech.get_recognizer()
    recognizer.expect_phrase('hello')
    button = aiy.voicehat.get_button()
    # led = aiy.voicehat.get_led()
    aiy.audio.get_recorder().start()

    while True:
        aiy.audio.say('Hello Alden God of Water and my good friend I want to again wish YOU happy birthday and to thank you for taking me on this trip')
#        while True:
#            os.system('aplay soloKnocks.wav')
#            reading = ser.read(1)
#            if reading == '!':
#                break
#        ser.write(b'?')
        print('waiting for button')
        button.wait_for_press()
        print('Listening...')
        text = recognizer.recognize()
        if text is None:
            # aiy.audio.say('')
            print('Sorry, I did not hear you.')
        else:
            print('You said "', text, '"')
            # if 'turn on the light' in text:
            #     # led.set_state(aiy.voicehat.LED.ON)
            #     ser.flush()
            # elif 'turn off the light' in text:
            #     led.set_state(aiy.voicehat.LED.OFF)
            if 'water' in text:
                aiy.audio.say(random.choice(water_status))
            if 'hello' in text:
                aiy.audio.say(random.choice(plant_response))
            elif 'goodbye' in text:
                break
            else:
                aiy.audio.say('yes it is plant')


if __name__ == '__main__':
    main()
