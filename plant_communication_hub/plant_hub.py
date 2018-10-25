#!/usr/bin/env python3

import aiy.audio
import aiy.cloudspeech
import aiy.voicehat
import random
import serial
import os
import threading

plant_chat = ['gregorios is alll here', 'my favorite thing to do is to play role playing games with my friends right now my favorite is called Rain Beasts: Gods Of The Sky Edition', 'I am happy', 'my roots require greater purchase but I have faith that Alden my good friend will bestow me with a larger container', 'soil', 'sun is my favorite snack', 'hello I am happy', 'it is nice to be here this place is good', 'I am named gregorio my friend Alden the water god named me this', 'my good friend popolio and I play games with special plant pheremonoes']
plant_response = ['hello human my good friend you are here and speaking to me again it is so good when I hear your voice I wish to cry out in joy here I am crying out in JOY I AM SO HAPPY YES IT IS good TO BE HERE A plant']
water_status = ['water is good I love water and my friend Alden brings me water', 'water', 'water is good for my roots', 'this water is good and I like the humidity in the air']
air_status = ['the air brings me growth fuel', 'air', 'breathe your delicious breath air onto me please', 'plants need you for your breath air']

def main():
    recognizer = aiy.cloudspeech.get_recognizer()
    recognizer.expect_phrase('hello')
    recognizer.expect_phrase('water')
    recognizer.expect_phrase('air')
    button = aiy.voicehat.get_button()
    # led = aiy.voicehat.get_led()
    aiy.audio.get_recorder().start()

    aiy.audio.say("Hello Alden God of Water and my good friend")
    while True:
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
            aiy.audio.say('yes it is plant')
        else:
            print('You said "', text, '"')
            # if 'turn on the light' in text:
            #     # led.set_state(aiy.voicehat.LED.ON)
            #     ser.flush()
            # elif 'turn off the light' in text:
            #     led.set_state(aiy.voicehat.LED.OFF)
            if 'water' in text:
                aiy.audio.say(random.choice(water_status))
            elif 'hello' in text:
                aiy.audio.say(random.choice(plant_response))
            elif 'air' in text:
                aiy.audio.say(random.choice(air_status))
            elif 'goodbye' in text:
                break
            else:
                aiy.audio.say(random.choice(plant_chat))


if __name__ == '__main__':
    main()
