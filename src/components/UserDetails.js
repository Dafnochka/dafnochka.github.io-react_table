import React, {Component} from 'react';

class UserDetails extends Component {
    render() {
        const user = this.props.user;

        return (
            <div>
                <div>Выбран пользователь <b>{user.firstName} {user.lastName} </b></div>
                <div>Описание:
                    <br/>
                    <div >{user.description}</div>
                </div>
                <div>Адрес проживания: <b>{user.address.streetAddress}</b></div>
                <div>Город <b>{user.address.city} </b></div>
                <div>Провинция/штат <b>{user.address.state} </b></div>
                <div>Индекс <b>{user.address.zip} </b></div>
            </div>
        )
    }
}

export {UserDetails};

