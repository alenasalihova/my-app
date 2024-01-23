import React, { Component } from 'react';

export class UncontrolledForm extends Component {
  constructor(props) {
    super(props);

    // Референції для полів форми
    this.firstNameRef = React.createRef();
    this.lastNameRef = React.createRef();
    this.birthdateRef = React.createRef();
    this.genderMaleRef = React.createRef();
    this.genderFemaleRef = React.createRef();
    this.isMarriedRef = React.createRef();
  }

  // Обробка подачі форми
  handleSubmit = (e) => {
    e.preventDefault();

    // Отримання значень полів за допомогою референцій
    const firstName = this.firstNameRef.current.value;
    const lastName = this.lastNameRef.current.value;
    const birthdate = this.birthdateRef.current.value;
    const gender = this.genderMaleRef.current.checked ? 'male' : 'female';
    const isMarried = this.isMarriedRef.current.checked;

    // Тут ви можете використовувати значення полів для подальшої обробки

    // Наприклад, вивести значення у консоль
    console.log({
      firstName,
      lastName,
      birthdate,
      gender,
      isMarried,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Неконтрольована форма з використанням useState</h2>
        <div>
          <label htmlFor="firstName">Ім'я:</label>
          <input type="text" id="firstName" ref={this.firstNameRef} />
        </div>
        <div>
          <label htmlFor="lastName">Прізвище:</label>
          <input type="text" id="lastName" ref={this.lastNameRef} />
        </div>
        <div>
          <label htmlFor="birthdate">Дата народження:</label>
          <input type="date" id="birthdate" ref={this.birthdateRef} />
        </div>
        <div>
          <label>Стать:</label>
          <div>
            <label>
              <input type="radio" name="gender" ref={this.genderMaleRef} />
              Чоловіча
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="gender" ref={this.genderFemaleRef} />
              Жіноча
            </label>
          </div>
        </div>
        <div>
          <label>
            <input type="checkbox" ref={this.isMarriedRef} />
            Одружений(на)
          </label>
        </div>
        <button type="submit">Відправити</button>
      </form>
    );
  }
}
