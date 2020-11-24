import React, {Fragment} from 'react'
import SelfDelOk from './SelfDelOk'
import './Modal.css'
import Calendar from 'react-calendar';


export default class SelfDeliverModal extends React.Component{

    state = {
        date: new Date(),
        isOpen: false,
        isCalendar: false,
        valueDate: '',
        days: {
            Sun: 'Воскресение',
            Mon: 'Понедельник', 
            Tue: 'Вторник', 
            Wed: 'Среда', 
            Thu: 'Четверг', 
            Fri: 'Пятница', 
            Sat: 'Субота'
        }
    };

    // onChange = date => 


    onChange = (date) => {
        this.setState({ date })
        this.setState({ isCalendar: false})
        this.setState({ valueDate: 
            date.toString().split(' ')[3] + 
            ' | ' + 
            date.toString().split(' ')[2]+ 
            ' | ' +
            this.state.days[date.toString().split(' ')[0]]})
    }

    render() {
        return (
            <Fragment>
                <button className='modBtn' onClick={() => this.setState({isOpen: true})} > Самовывоз </button>
                {this.state.isOpen && <div className='modal'>
                    <div className='modal-body'>
                        <h1 className='modHead' >Самовывоз</h1>
                        <form className='SelfDeliverForm'>
                          <h1 className="text">Кто будет забирать </h1> <br />
                            <input type='text' className='modInput' placeholder='ФИО' /><br />
                            <h1 className="text">Что будет забирать </h1> <br />
                            <input type='text' className='modInput' placeholder='{ItemName}' /><br />
                            <h1 className="text">Дата самовывоза</h1> <br />
                            <div>
                                { this.state.isCalendar && <Calendar 
                            className='calendar'
                            onChange={this.onChange}
                            value={this.state.date}
                            />}
                            <input type='text' onClick={()=>this.setState({ isCalendar: true})} value={this.state.valueDate} className='modInput' placeholder={'12 ноября 2020, 15:15'} /><br />
                            </div>
                        </form>
                        <div className='acceptBtn'>
                        <SelfDelOk date={this.state.valueDate} closedWindow={()=> this.setState({isOpen: false})} />
                        </div>
                    </div>
                </div>}
            </Fragment>
        )
    }

}
