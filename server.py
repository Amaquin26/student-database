from flask import Flask
from flask_cors import CORS
from flask import request
from db import *

app = Flask(__name__)
CORS(app)

@app.route('/getall')
def get_all():
    try:
        return getall('student')
    except Exception as e:
        return {'error':str(e)}

@app.route('/getrecord',methods=['POST'])
def get_record():
    try:
        param:list = list(request.json.items())
        flds:list = list(param[0])
    
        match flds[0]:
            case "idno":
                return getrecord('student',idno=flds[1])
            case "last name":
                return getrecord('student',lastname=flds[1])
            case "first name":
                return getrecord('student',firstname=flds[1])
            case "course":
                return getrecord('student',course=flds[1])
            case "level":
                return getrecord('student',level=flds[1])
            case _:
                return {}
    except Exception as e:
        return {'error':str(e)}
    
@app.route('/delete/<idno>', methods=['DELETE'])
def delete_student(idno):
    try:
        return [deleterecord('student',idno=idno)]
    except Exception as e:
        return {'error':str(e)}
    
@app.route('/update/<idno>', methods=['PUT'])
def update_student(idno):
    try:
        data:dict = request.json

        lastname = data.get('lastname')
        firstname = data.get('firstname')
        course = data.get('course')
        level = data.get('level')

        return [updaterecord('student',idno=idno,lastname=lastname,firstname=firstname,course=course,level=level)]
    except Exception as e:
        return {'error':str(e)}
    
@app.route('/add', methods=['POST'])
def add_student():
    try:
        data:dict = request.json

        idno = data.get('idno')
        lastname = data.get('lastname')
        firstname = data.get('firstname')
        course = data.get('course')
        level = data.get('level')

        return [addrecord('student',idno=idno,lastname=lastname,firstname=firstname,course=course,level=level)]
    except Exception as e:
        return {'error':str(e)}
