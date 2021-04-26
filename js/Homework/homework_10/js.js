// Створити білдер юзера , Задопомогою стандартних функцій Який буде приймати name , age , login password ,
//     Логін міняти неможна
//     Вік можна робити лише більшим за попередньо вказаний
//     Реалізувати  зміну пароля через сетер, але при умаві що має спів падати логі старий пароль , пароль змінюється при умові що старий пароль і логін співпадають
//     Пароль має бути більше 8 символів і містити спець символ

function newUser(name, age, login, password) {
    let _name = name;
    let _age = age;
    let _login = login;
    let _password = password;

    function getName() {
        return _name;
    }

    function getAge() {
        return _age;
    }

    function getLogin() {
        return _login;
    }

    function getPassword() {
        return _password;
    }

    function setName(newName) {
        _name = newName;
        return `Зміна імені Статис : Успішно ${_name}`
    }

    function setAge(newAge) {
        if (newAge > _age) {
            _age = newAge;
            return `Зміна імені Статис : Успішно ${_age}`
        }
        return `Ти не можеш молодшати, сорі/ вік не змінено! ${_age}`
    }

    function setLogin(newLogin) {
        return `твій логін уже існує ти неможеш його змінити на ${newLogin}`;
    }

    function setPassword(login, oldPassword, newPassword) {
        if (login === _login && oldPassword === _password) {
            if (checkNewPassword(newPassword)) {
                _password = newPassword;
                return `Зміна імені Статис : Успішно ${_password}`
            }
            return `Неваліддне введення пароль старий ${_password}`;
        }
        return `Не співпадає логін, або старий пароль пароль старий ${_password}`
    }

    function checkNewPassword(newPass) {
        const regex = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g
        return regex.test(newPass) && Array.from(newPass).filter(value => value != ' ').length > 8;
    }

    return {
        getName,
        getAge,
        getLogin,
        getPassword,
        setName,
        setAge,
        setLogin,
        setPassword,
    }

}


const Yaroslav = newUser('Yaroslav', 23, 'MyViton', 'password@3');

console.log(Yaroslav);


console.log(Yaroslav.getName());
console.log(Yaroslav.getAge());
console.log(Yaroslav.getLogin());
console.log(Yaroslav.getPassword());

console.log('------------------------------------Використовуємо сетери-----------------------------------------------------------');

console.log(Yaroslav.setName('ivan'));
console.log(Yaroslav.setAge('21'));
console.log(Yaroslav.setAge('25'));

console.log(Yaroslav.setLogin('zlangoBelz'));
console.log(Yaroslav.setPassword('zlangoBelz', 'password@3', 'Privatazimat@@@45'));
console.log(Yaroslav.setPassword('MyViton', 'password@3', 'xxx'));
console.log(Yaroslav.setPassword('MyViton', 'password@3', 'Privatazimat@@@45'));







