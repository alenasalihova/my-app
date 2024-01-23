import React, { Component } from 'react';

// Початковий стан
const initialState = {
  firstName: '',
  lastName: '',
  birthdate: '',
  gender: 'male',
  isMarried: false,
};

// Редуктор для обробки дій
const formReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};

export class ControlledFormReducer extends Component {
    constructor(props) {
        super(props);
    
        // Ініціалізація стану та редуктора
        this.state = initialState;
    
        // Прив'язка методів до поточного екземпляру класу
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateFormState = this.updateFormState.bind(this);
      }
    
      // Метод для оновлення стану форми
      updateFormState(field, value) {
        this.setState((prevState) => formReducer(prevState, { type: 'SET_FIELD', field, value }));
      }
    
      // Обробка подій для зміни стану полів форми
      handleFieldChange(e) {
        const { name, value, type, checked } = e.target;
        const fieldValue = type === 'checkbox' ? checked : value;
        this.updateFormState(name, fieldValue);
      }
    
      // Обробка подачі форми
      handleSubmit(e) {
        e.preventDefault();
    
        // Тут ви можете використовувати значення полів для подальшої обробки
    
        // Наприклад, вивести значення у консоль
        console.log(this.state);
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <h2>Контрольована форма з використанням useReducer</h2>
            <div>
              <label htmlFor="firstName">Ім'я:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleFieldChange}
              />
            </div>
            <div>
              <label htmlFor="lastName">Прізвище:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleFieldChange}
              />
            </div>
            <div>
              <label htmlFor="birthdate">Дата народження:</label>
              <input
                type="date"
                id="birthdate"
                name="birthdate"
                value={this.state.birthdate}
                onChange={this.handleFieldChange}
              />
            </div>
            <div>
              <label>Стать:</label>
              <div>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={this.state.gender === 'male'}
                    onChange={this.handleFieldChange}
                  />
                  Чоловіча
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={this.state.gender === 'female'}
                    onChange={this.handleFieldChange}
                  />
                  Жіноча
                </label>
              </div>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  name="isMarried"
                  checked={this.state.isMarried}
                  onChange={this.handleFieldChange}
                />
                Одружений(на)
              </label>
            </div>
            <button type="submit">Відправити</button>
          </form>
        );
      }
    }