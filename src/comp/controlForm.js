import React, { Component } from 'react';

export class ControlledForm extends Component {
  constructor(props) {
    super(props);

    // Початкові стани для полів форми
    this.state = {
      firstName: '',
      lastName: '',
      birthdate: '',
      gender: 'male',
      isMarried: false,
    };
  }

  // Обробники подій для зміни стану полів форми
  handleFirstNameChange = (e) => this.setState({ firstName: e.target.value });
  handleLastNameChange = (e) => this.setState({ lastName: e.target.value });
  handleBirthdateChange = (e) => this.setState({ birthdate: e.target.value });
  handleGenderChange = (e) => this.setState({ gender: e.target.value });
  handleMaritalStatusChange = (e) => this.setState({ isMarried: e.target.checked });

  // Обробка подачі форми
  handleSubmit = (e) => {
    e.preventDefault();

    // Тут ви можете використовувати значення полів для подальшої обробки

    // Наприклад, вивести значення у консоль
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Контрольована форма з використанням useState</h2>
        <div>
          <label htmlFor="firstName">Ім'я:</label>
          <input type="text" id="firstName" value={this.state.firstName} onChange={this.handleFirstNameChange} />
        </div>
        <div>
          <label htmlFor="lastName">Прізвище:</label>
          <input type="text" id="lastName" value={this.state.lastName} onChange={this.handleLastNameChange} />
        </div>
        <div>
          <label htmlFor="birthdate">Дата народження:</label>
          <input type="date" id="birthdate" value={this.state.birthdate} onChange={this.handleBirthdateChange} />
        </div>
        <div>
          <label>Стать:</label>
          <div>
            <label>
              <input
                type="radio"
                value="male"
                checked={this.state.gender === 'male'}
                onChange={this.handleGenderChange}
              />
              Чоловіча
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="female"
                checked={this.state.gender === 'female'}
                onChange={this.handleGenderChange}
              />
              Жіноча
            </label>
          </div>
        </div>
        <div>
          <label>
            <input type="checkbox" checked={this.state.isMarried} onChange={this.handleMaritalStatusChange} />
            Одружений(на)
          </label>
        </div>
        <button type="submit">Відправити</button>
      </form>
    );
  }
}

