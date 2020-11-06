package steps;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import entidades.Filme;
import entidades.NotaAluguel;
import org.junit.Assert;
import service.AluguelService;
import utils.DateUtils;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;


public class AlugarFilmesSteps {
    private Filme filme;
    private AluguelService aluguel =new AluguelService();
    private NotaAluguel nota;
    private String erro;
    private String tipoAluguel;

    @Dado("^um filme com estoque de (\\d+) unidades$")
    public void um_filme_com_estoque_de_unidades(int arg1) throws Throwable {
        filme = new Filme();
        filme.setEstoque(arg1);
    }

    @Dado("^que o preço de aluguel seja R\\$(\\d+)$")
    public void que_o_preço_de_aluguel_seja_R$(int arg1) throws Throwable {
        filme.setAluguel(arg1);
    }

    @Quando("^alugar$")
    public void alugar() throws Throwable {
        try {
            nota = aluguel.alugar(filme, tipoAluguel);
        } catch (RuntimeException e) {
            erro = e.getMessage();
        }
    }

    @Entao("^o preço do aluguel será R\\$ (\\d+)$")
    public void o_preço_do_aluguel_será_R$(int arg1) throws Throwable {
        Assert.assertEquals(arg1, nota.getPreco());

    }

//    @Entao("^a data de entrega será no dia seguinte$")
//    public void a_data_de_entrega_será_no_dia_seguinte() throws Throwable {
//        Calendar cal = Calendar.getInstance();
//        cal.add(Calendar.DAY_OF_MONTH,1);
//
//        Date dataRetorno = nota.getDataEntrega();
//        Calendar calRetorno = Calendar.getInstance();
//        calRetorno.setTime(dataRetorno);
//
//        Assert.assertEquals(cal.get(Calendar.DAY_OF_MONTH), calRetorno.get(Calendar.DAY_OF_MONTH));
//        Assert.assertEquals(cal.get(Calendar.MONTH), calRetorno.get(Calendar.MONTH));
//        Assert.assertEquals(cal.get(Calendar.YEAR), calRetorno.get(Calendar.YEAR));
//    }

    @Entao("^o estoque do filme será (\\d+) unidade$")
    public void oEstoqueDoFilmeSeráUnidade(int arg1) throws Throwable {
        Assert.assertEquals(arg1,filme.getEstoque());
    }

    @Entao("^não será possível por falta de estoque$")
    public void nãoSeráPossívelPorFaltaDeEstoque() throws Throwable {
        Assert.assertEquals("Filme sem estoque",erro);
    }

    @Dado("^que o tipo do aluguel seja (.*)$")
    public void queOTipoDoAluguelSejaExtendido(String tipo) throws Throwable {
        tipoAluguel = tipo;
    }

    @Entao("^a data de entrega será em (\\d+) dias?$")
    public void aDataDeEntregaSeráEmDias(int arg1) throws Throwable {
        Date dataEsperada = DateUtils.obterDataComDiferencaDias(arg1);
        Date dataReal = nota.getDataEntrega();

        DateFormat format = new SimpleDateFormat("dd/MM/yyyy");

        Assert.assertEquals(format.format(dataEsperada),format.format(dataReal));
    }

    @Entao("^a pontuação recebida será de (\\d+) pontos$")
    public void aPontuaçãoRecebidaSeráDePontos(int arg1) throws Throwable {
    Assert.assertEquals(arg1,nota.getPontuacao());
    }

}
