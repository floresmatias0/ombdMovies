import React,{Component} from 'react' 
import './Inicio.css'
import '../../animations/animations.css'
import { withTranslation } from 'react-i18next';


export class Inicio extends Component{
    render(){
        const { t } = this.props

        return (
            <div className='container-inicio expandUp'>
                <div className='container-words'>
                    <p>{t('parrafo1')} </p>
                    <p>{t('parrafo2')}</p>
                    <p>{t('parrafo3')}</p>
                    <p>{t('parrafo4')}</p>   
                </div>
                
            </div>
        )
    }
}

export default withTranslation()(Inicio);