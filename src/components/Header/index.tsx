import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
    onOpenewTransactionModal: () => void;
}

export function Header({onOpenewTransactionModal}: HeaderProps) {


    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dtmoney"/>
                <button type="button" onClick={onOpenewTransactionModal}>Nova Transação</button>

            </Content>
        </Container>
    )
}
