import { useState } from 'react';

function home(){
    return (
        <div>
            <h1>Pagina Principal</h1>
            <Contador />
        </div>
    )
}
function Contador(){
    const [contador, setContador] = useState(1);

    function adicionarContador(){
        setContador(contador+1);
    }

    return(
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

function home2(){
    return (
        <div>
            <header className='headerTopo'>
                <img src="redessociais/logoMH.png" className='logoTopo'></img>
                <h1 className='h1'>MH Serviços</h1>
            </header>
            <section className='section'>
                <p className="infolink">*clique no icone para acessar o site!</p>
                <article className='article'>
                    <h2>Impressão pelo <span className='whatsapp'>Whatsapp</span> ou <span className='email'>Email</span></h2>
                    <a href="http://api.whatsapp.com/send?phone=556130424828" target="_blank"><img src="redessociais/whatsapp.png" className='logos'></img></a> <a href="mailto:clienteonlinemh@gmail.com" target="_blank"><img src="redessociais/gmail.png" className='logos'></img></a>
                    <ul className='ul1'>
                        <li><strong>R$2,00</strong> A primeira página;
                            <ul className='ul2'>
                                <li><strong>R$0,75</strong> Cada página a mais; <strong>PRETO</strong> e <strong>BRANCO</strong>;</li>
                                <li><strong>R$1,50</strong> Cada página a mais; <strong className='colorido'>COLORIDO</strong>;</li>
                            </ul>
                        </li>
                    </ul>
                </article>
                <article className='article'>
                    <h2><span className='colorido'>Emissão</span> de boletos</h2>
                    <ul className='ul1'>
                        <li><strong>R$3,00</strong> A primeira página;
                            <ul className='ul2'>
                                <li><strong>R$0,75</strong> Cada página a mais; <strong>PRETO</strong> e <strong>BRANCO</strong>;</li>
                                <li><strong>R$1,50</strong> Cada página a mais; <strong className='colorido'>COLORIDO</strong>;</li>
                            </ul>
                        </li>
                    </ul>
                </article>
                <article className='article'>
                    <h2>Detran-DF</h2>
                    <a href="https://portal.detran.df.gov.br/#/home" target="_blank"><img src="redessociais/detrandflogo.png" className='logos'></img></a> <a href="https://getran.detran.df.gov.br/site/veiculos/consultas/filtroplacarenavam-consultaveiculo.jsp" target="_blank"><img src="redessociais/detrandfantigologo.png" className='logos'></img></a> <a href="https://ww1.receita.fazenda.df.gov.br/emissao-segunda-via/ipva" target="_blank"><img src="redessociais/ipvalogo.png" className='logos'></img></a>
                    <ul className='ul1'>
                        <li>Documentos necessários:
                            <ul className='ul2'>
                                <li>Placa;</li>
                                <li>Renavam;</li>
                            </ul>
                        </li>
                        <li>Para emitir CRLV:
                            <ul className='ul2'>
                                <li>Aplicativo <a href="https://play.google.com/store/apps/details?id=br.com.mesotec.detrandf&hl=pt_BR&gl=US" target="_blank">DETRAN-DF</a> com CPF e Senha;</li>
                                <li>Se não tiver cadastro, precisa do proprietário e de seu celular;</li>
                            </ul>
                        </li>
                    </ul>
                </article>
                <article className='article'>
                    <h2>Detran-GO</h2>
                    <a href="https://www.detran.go.gov.br/psw/#/pages/conteudo/consulta-veiculo" target="_blank"><img src="redessociais/detrangologo.ico" className='logos'></img></a>
                    <ul className='ul1'>
                        <li>Documentos necessários:
                            <ul className='ul2'>
                                <li>Placa;</li>
                                <li>Renavam;</li>
                            </ul>
                        </li>
                        <li>Para emitir CRLV:
                            <ul className='ul2'>
                                <li>O boleto do IPVA e Licenciamento pago;</li>
                            </ul>
                        </li>
                    </ul>
                </article>
                <article className='article'>
                    <h2>Detran-MG</h2>
                    <a href="https://www.detran.mg.gov.br/veiculos/situacao-do-veiculo" target="_blank"><img src="redessociais/detranmglogo.png" className='logos'></img></a> <a href="https://ipva1.fazenda.mg.gov.br/ipvaonline/inputEmissaoGuiaArrecadacaoIpvaPorRenavam.action" target="_blank"><img src="redessociais/ipvalogo.png" className='logos'></img></a> <a href="https://www.detran.mg.gov.br/veiculos/documentos-de-veiculos/imprimir-crlv" target="_blank"><img src="redessociais/crlvlogo.png" className='logos'></img></a>
                    <ul className='ul1'>
                        <li>Documentos necessários:
                            <ul className='ul2'>
                                <li>Placa;</li>
                                <li>Renavam;</li>
                                <li>Chassi;</li>
                            </ul>
                        </li>
                        <li>Para emitir CRLV:
                            <ul className='ul2'>
                                <li>Placa;</li>
                                <li>Renavam;</li>
                                <li>CPF do proprietário;</li>
                                <li>Número do CRV (Encontrado no DUT/ATPV);</li>
                            </ul>
                        </li>
                    </ul>
                </article>
                <article className='article'>
                    <h2>IPTU Sefaz-DF</h2>
                    <a href="https://ww1.receita.fazenda.df.gov.br/emissao-segunda-via/iptu" target="_blank"><img src="redessociais/sefazdflogo.png" className='logos'></img></a>
                    <ul className='ul1'>
                        <li>Documentos necessários:
                            <ul className='ul2'>
                                <li>Inscrição do imóvel ou qualquer IPTU antigo;</li>
                            </ul>
                        </li>
                    </ul>
                </article>
                <article className='article'>
                    <h2>Parcelamento Sefaz-DF</h2>
                    <a href="https://ww1.receita.fazenda.df.gov.br/emissao-segunda-via/parcelamento" target="_blank"><img src="redessociais/sefazdflogo.png" className='logos'></img></a>
                    <ul className='ul1'>
                        <li>Documentos necessários:
                            <ul className='ul2'>
                                <li>Código do parcelamento ou qualquer boleto antigo do parcelamento;</li>
                            </ul>
                        </li>
                    </ul>
                </article>
                <article className='article'>
                    <h2>Habitação CAIXA</h2>
                    <a href="https://www.habitacaodigital.caixa.gov.br/acesso-cliente" target="_blank"><img src="redessociais/caixalogo.png" className='logos'></img></a>
                    <ul className='ul1'>
                        <li>Documentos necessários:
                            <ul className='ul2'>
                                <li>Número do contrato;</li>
                                <li>CPF;</li>
                                <li>Data de Nascimento;</li>
                            </ul>
                        </li>
                    </ul>
                </article>
                <article className='article'>
                    <h2>FIES CAIXA</h2>
                    <a href="https://www3.caixa.gov.br/fies/asp/boleto/boletoonline2.asp" target="_blank"><img src="redessociais/caixalogo.png" className='logos'></img></a>
                    <ul className='ul1'>
                        <li>Documentos necessários:
                            <ul className='ul2'>
                                <li>CPF;</li>
                                <li>Data de Nascimento;</li>
                            </ul>
                        </li>
                    </ul>
                </article>
            </section>
            <footer className='footer'>
                <ul>
                    <p>Desenvolvido por Victor Hugo</p>
                    <li><a href="">Instagram</a></li>
                </ul>
            </footer>
        </div>
    )
}

export default home2
