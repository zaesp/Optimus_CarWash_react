import './ReservasForm.css';
import imagenes from "../../assets/imagenes.js";
import { useNavigate } from 'react-router-dom';

const ReservasForm = ({ handleSubmit, handleValues, reserva, user, title }) => {

    return (
        <div className="reservationFormPage2">
            <div className="reservationFormContainer2">
                <div className="formHeader2">
                    <img src={imagenes.img3} alt="Logo" className="formImage2" />
                </div>
                <h2 className="formTitle2">{title}</h2>

                <form onSubmit={handleSubmit} className="reservationForm2">
                    {/*<p className={`errorMessage2 ${error ? "visible" : ""}`}>{error}</p> */}
                    <div className="formColumnsWrapper2">
                        <div className="formColumn2">
                            {/* Columna izquierda */}
                            <div className="formGroup2">
                                <label className="label4" htmlFor="nombre">Nombre completo</label>
                                <input
                                    disabled={!user}
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    placeholder="Ingresa tu nombre"
                                    value={user?.usuario || ""}
                                    onChange={handleValues}
                                />
                            </div>
                            <div className="formGroup2">
                                <label className="label4" htmlFor="email">Correo electrónico</label>
                                <input
                                    disabled={!user}
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Ingresa tu email"
                                    value={user?.email || ""}
                                    onChange={handleValues}
                                />
                            </div>
                            <div className="formGroup2">
                                <label className="label4" htmlFor="telefono">Teléfono</label>
                                <input
                                    disabled={!user}
                                    type="tel"
                                    id="telefono"
                                    name="telefono"
                                    placeholder="Ingresa tu teléfono"
                                    value={reserva.telefono}
                                    onChange={handleValues}
                                />
                            </div>
                            <div className="formGroup2">
                                <label className="label4" htmlFor="vehiculo" placeholder="Ingrese tipo de vehiculo">Tipo de vehículo</label>
                                <select id="vehiculo" name="vehiculo" value={reserva.vehiculo} onChange={handleValues} disabled={!user}>
                                    <option value="Auto">Elija su Vehiculo</option>
                                    <option value="Auto">Auto</option>
                                    <option value="Moto">Moto</option>
                                    <option value="Camioneta">Camioneta</option>
                                </select>
                            </div>
                        </div>

                        <div className="formColumn2">
                            {/* Columna derecha */}
                            <div className="formGroup2">
                                <label className="label4" htmlFor="servicio">Servicio</label>
                                <select id="servicio" name="servicio" value={reserva.servicio} onChange={handleValues} disabled={!user}>
                                    <option value="2 ruedas Basico">Elija su Servicio</option>
                                    <option value="2 ruedas Basico">2 ruedas Basico</option>
                                    <option value="2 ruedas Optimo">2 ruedas Optimo</option>
                                    <option value="3 ruedas Basico">3 ruedas Basico</option>
                                    <option value="3 ruedas Optimo">3 ruedas Optimo</option>
                                    <option value="4 ruedas Basico">4 ruedas Basico</option>
                                    <option value="4 ruedas Optimos">4 ruedas Optimo</option>
                                </select>
                            </div>
                            <div className="formGroup2">
                                <label className="label4" htmlFor="fecha">Fecha</label>
                                <input
                                    disabled={!user}
                                    type="date"
                                    id="fecha"
                                    name="fecha"
                                    value={reserva.fecha}
                                    onChange={handleValues}
                                />
                            </div>
                            <div className="formGroup2">
                                <label className="label4" htmlFor="hora">Hora</label>
                                <input
                                    disabled={!user}
                                    type="time"
                                    id="hora"
                                    name="hora"
                                    value={reserva.hora}
                                    onChange={handleValues}
                                />
                            </div>
                            <div className="formGroup2">
                                <label className="label4" htmlFor="notas">Notas adicionales</label>
                                <textarea
                                    disabled={!user}
                                    id="notas"
                                    name="notas"
                                    placeholder="Agrega comentarios o instrucciones (opcional)"
                                    value={reserva.notas}
                                    onChange={handleValues}
                                />
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="submitButton3" >
                        {user ? "Enviar" : "Porfavor Inicie Seccion o Registrese" /*contenido dentro del button*/}
                    </button>
                </form>

            </div>
        </div>
    )
}

export default ReservasForm;