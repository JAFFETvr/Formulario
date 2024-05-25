import React, { useState, useRef } from 'react';
import Swal from 'sweetalert2';
import Lista from '../molecules/Lista';
import Button from '../atoms/Button';
import Text from '../atoms/Text';
import LinkedList from '../../data/LinkedList';
import './Section1.css';

function Section1() {
  const studentListRef = useRef(new LinkedList());
  const [userName, setUsername] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');
  const [curso, setCurso] = useState('');
  const [fecha, setFecha] = useState('');
  const [showStudentList, setShowStudentList] = useState(false);

  const handlerClick = (event) => {
    const student = {
      userName,
      apellido,
      edad,
      curso,
      fecha,
    };

    studentListRef.current.append(student);

    Swal.fire({
      title: 'Alumno Registrado',
      html: `Nombre: ${userName}<br/>
             Apellido: ${apellido}<br/>
             Edad: ${edad}<br/>
             Curso: ${curso}<br/>
             Fecha: ${fecha}`,
      imageUrl: './1.png',
      imageWidth: 400,
      imageHeight: 200,
    });

    console.log('Lista de estudiantes:');
    studentListRef.current.print();
  };

  const handleShowListClick = () => {
    setShowStudentList(true);
  };

    return (
        <>
        
          <div id="Conteiner">
            <Text></Text>
            <Lista type="text" placeholder="Ingresa el nombre del alumno" text="Nombre" val={userName} fnVal={setUsername}></Lista>
            <Lista type="text" placeholder="Ingresa el apellido del alumno" text="Apellido" val={apellido} fnVal={setApellido}></Lista>
            <Lista type="number" placeholder="Ingresa la edad del alumno" text="Edad" val={edad} fnVal={setEdad}></Lista>
            <Lista type="number" placeholder='Ingresa el curso' text='Curso' val={curso} fnVal={setCurso}></Lista>
            <Lista type="date" placeholder="Ingresa la fecha" text='Fecha' val={fecha} fnVal={setFecha}></Lista>
            <Button id="button" title="Registrar Alumno" onclick={handlerClick}></Button>
        </div>
        <div id="conteiner2">
        <Button title="Mostrar Lista de Estudiantes" onclick={handleShowListClick} />
        {showStudentList && (
          <ul>
            {studentListRef.current.toArray().map((student, index) => (
              <li key={index}>
                Nombre: {student.userName}, Apellido: {student.apellido}, Edad: {student.edad}, Curso: {student.curso}, Fecha: {student.fecha}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Section1;
