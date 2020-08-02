import io
import eel

patient_name=""
no_of_dots=100
special_value=""
eye_choice=""

eel.init('web')

@eel.expose
def input_py(name,dots,special,eye):
    patient_name=name
    no_of_dots=dots
    special_value=special
    if (eye==True):
        eye_choice='R'
    else:
        eye_choice='L'


eel.start('index.html', size=(1000, 600))
