import * as React from 'react';

class App extends React.Component {


    public render() {
        return (
            <div className="page-content">
                <div className="container">
                    <h1>Калькулятор грузоперевозок</h1>
                    <div className="calc-wrapper row">
                        <div className="col-xs-8">
                            <form id="calc_form" action="/tools/order/">
                                <input type="hidden" name="form_date" value="18.10.2018"/>
                                <div className="calc__section">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="section from likearow">
                                                <h2>Откуда</h2>
                                                <div className="form-group fc-from required">
                                                    <input type="hidden" name="from[guid]" value=""/>
                                                    <label>
                                                        <span className="twitter-typeahead" style={{
                                                            position: 'relative',
                                                            display: 'inline-block'
                                                        }}>
                                                            <input
                                                                type="text"
                                                                className="form-control calc-form__input_from tt-hint"
                                                                value=""
                                                                autoComplete="off"
                                                                dir="ltr"
                                                                style={{
                                                                    position: 'absolute',
                                                                    top: '0px',
                                                                    left: '0px',
                                                                    borderColor: 'transparent',
                                                                    boxShadow: 'none',
                                                                    opacity: 1,
                                                                    background: 'none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255)'
                                                                }}/>
                                                            <input
                                                                type="text"
                                                                name="from[title]"
                                                                className="form-control calc-form__input_from tt-input"
                                                                placeholder="Населенный пункт"
                                                                value=""
                                                                autoComplete="off"
                                                                dir="auto"
                                                                style={{
                                                                    position: 'relative',
                                                                    verticalAlign: 'top',
                                                                    backgroundColor: 'transparent'
                                                                }}/>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="section to likearow">
                                                <h2>Куда</h2>
                                                <div className="form-group fc-to required">
                                                    <input type="hidden" name="to[guid]" value=""/>
                                                    <label>
                                                        <span className="twitter-typeahead"
                                                            style={{
                                                                position: 'relative',
                                                                display: 'inline-block'
                                                            }}>
                                                            <input
                                                            type="text"
                                                            className="form-control calc-form__input_to tt-hint"
                                                            value=""
                                                            autoComplete="off"
                                                            dir="ltr"
                                                            style={{
                                                                position: 'absolute',
                                                                top: '0px',
                                                                left: '0px',
                                                                borderColor: 'transparent',
                                                                boxShadow: 'none',
                                                                opacity: 1,
                                                                background: 'none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255)'}}/>
                                                            <input
                                                                type="text"
                                                                name="to[title]"
                                                                className="form-control calc-form__input_to tt-input"
                                                                placeholder="Населенный пункт"
                                                                value=""
                                                                autoComplete="off"
                                                                dir="auto"
                                                                style={{
                                                                    position: 'relative',
                                                                    verticalAlign: 'top',
                                                                    backgroundColor: 'transparent'
                                                                }}/>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
