import React, { useState } from 'react';

export const Form = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    contraseña: '',
    validarContraseña: '',
    celular: ''
  });
  const [enviadoCorrectamente, setEnviadoCorrectamente] = useState(false);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    const usuarioRegex = /^[a-zA-Z]\d{4}$/;
    const contraseñaRegex = /^(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/;
    const telefono7DigitosRegex = /^[2-6]\d{6}$/;
    const telefono9DigitosRegex = /^9\d{8}$/;

    if (!usuarioRegex.test(formData.nombre)) {
      newErrors.nombre = 'El usuario debe iniciar con una letra y contener 4 dígitos.';
    }

    if (!contraseñaRegex.test(formData.contraseña)) {
      newErrors.contraseña = 'La contraseña debe contener al menos 8 caracteres alfanuméricos.';
    }

    if (formData.contraseña !== formData.validarContraseña) {
      newErrors.validarContraseña = 'Las contraseñas no coinciden.';
    }

    if ((formData.celular.length === 7 && !telefono7DigitosRegex.test(formData.celular)) ||
      (formData.celular.length === 9 && !telefono9DigitosRegex.test(formData.celular))) {
      newErrors.celular = 'El teléfono debe comenzar con los dígitos adecuados según la longitud.';
    }

    if (Object.keys(newErrors).length === 0) {
      console.log('Formulario válido:', formData);

      setFormData({
        nombre: '',
        correo: '',
        contraseña: '',
        validarContraseña: '',
        celular: ''
      });

      setErrors({});
      setEnviadoCorrectamente(true);
    } else {
      setErrors(newErrors);
      setEnviadoCorrectamente(false);
    }
  };

  return (
    <div className='flex flex-col items-center mt-[40px] mb-[203px] space-y-4'>
      
      {enviadoCorrectamente && <p className="text-green-600 font-bold uppercase">Enviado Correctamente</p>}

      <h2 className='font-bold text-4xl'>Crear Cuenta</h2>

      <form onSubmit={handleSubmit} className='flex flex-col space-y-4 w-[360px]'>

        <div className='flex flex-col space-y-2'>
          <label className='font-medium'>Nombre
            <span className='text-red-600 ml-1'> *</span>
          </label>
          <input
            className='border border-black rounded h-[38px] px-[12px]'
            type="text"
            placeholder='Nombre'
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
          {errors.nombre && <span className='text-red-600'>{errors.nombre}</span>}
        </div>

        <div className='flex flex-col space-y-2'>
          <label className='font-medium'>Correo
            <span className='text-red-600 ml-1'> *</span>
          </label>
          <input
            className='border border-black rounded h-[38px] px-[12px]'
            type="email"
            placeholder="Correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
          />
        </div>

        <div className='flex flex-col space-y-2'>
          <label className='font-medium'>Contraseña
            <span className='text-red-600 ml-1'> *</span>
          </label>
          <input
            className='border border-black rounded h-[38px] px-[12px]'
            type="password"
            placeholder="Contraseña"
            name="contraseña"
            value={formData.contraseña}
            onChange={handleChange}
          />
          {errors.contraseña && <span className='text-red-600'>{errors.contraseña}</span>}
        </div>

        <div className='flex flex-col space-y-2'>
          <label className='font-medium'>Validar Contraseña
            <span className='text-red-600 ml-1'> *</span>
          </label>
          <input
            className='border border-black rounded h-[38px] px-[12px]'
            type="password"
            placeholder="Validar Contraseña"
            name="validarContraseña"
            value={formData.validarContraseña}
            onChange={handleChange}
          />
          {errors.validarContraseña && <span className='text-red-600'>{errors.validarContraseña}</span>}
        </div>

        <div className='flex flex-col space-y-2'>
          <label className='font-medium'>Celular
            <span className='text-red-600 ml-1'> *</span>
          </label>
          <input
            className='border border-black rounded h-[38px] px-[12px]'
            type="tel"
            placeholder="Celular"
            name="celular"
            value={formData.celular}
            onChange={handleChange}
          />
          {errors.celular && <span className='text-red-600'>{errors.celular}</span>}
        </div>

        <button className='bg-[#4CAF4F] w-[360px] h-[38px] mt-6 rounded text-white'>Enviar</button>
      </form>
    </div>
  );
};
