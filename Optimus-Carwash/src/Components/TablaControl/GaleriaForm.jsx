import React from 'react'
import './GaleriaForm.css'

const GaleriaForm = () => {
    return (
        <>
            <div className="registro-container">
                <h2>Titulo de Formulario</h2>
                <form onSubmit={handleSumit}>

                    <label>Titulo: </label>
                    <input
                        type="text"
                        name="usuario"
                        placeholder="Ingresa tu nombre de usuario"

                        user={user.usuario}
                        onChange={handleValues}
                        required
                    />

                    <label>Descripcion: </label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Ingresa tu email"

                        value={user.email}
                        onChange={handleValues}
                        required
                    />

                    <label>Imagen: </label>
                    <select name="tipo" user={user.tipo} onChange={handleValues}>
                        <option value="cliente">Cliente</option>
                        <option value="administrador">Administrador</option>
                    </select>

                    <button type="submit">Subir</button>
                </form>
            </div>
        </>
    )
}

export default GaleriaForm