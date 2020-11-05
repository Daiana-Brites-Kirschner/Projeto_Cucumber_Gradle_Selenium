package steps;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import entidades.Filme;
import entidades.NotaAluguel;
import org.junit.Assert;
import service.AluguelService;

import java.util.Calendar;
import java.util.Date;


public class AlugarFilmesSteps {
    private Filme filme;
    private AluguelService aluguel =new AluguelService();
    private NotaAluguel nota;

    @Dado("^um filme com estoque de (\\d+)unidades$")
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
        nota = aluguel.alugar(filme);
    }

    @Entao("^o preço do aluguel será R\\$ (\\d+)$")
    public void o_preço_do_aluguel_será_R$(int arg1) throws Throwable {
        Assert.assertEquals(arg1, nota.getPreco());

    }

    @Entao("^a data de entrega será no dia seguinte$")
    public void a_data_de_entrega_será_no_dia_seguinte() throws Throwable {
        Calendar cal = Calendar.getInstance();
        cal.add(Calendar.DAY_OF_MONTH,1);

        Date dataRetorno = nota.getDataEntrega();
        Calendar calRetorno = Calendar.getInstance();
        calRetorno.setTime(dataRetorno);

        Assert.assertEquals(cal.get(Calendar.DAY_OF_MONTH),calRetorno.get(Calendar.DAY_OF_MONTH));
        Assert.assertEquals(cal.get(Calendar.MONTH),calRetorno.get(Calendar.MONTH));
        Assert.assertEquals(cal.get(Calendar.YEAR),calRetorno.get(Calendar.YEAR));
    }

    @Entao("^o estoque do filme será (\\d+) unidade$")
    public void o_estoque_do_filme_será_unidade(int arg1) throws Throwable {
        Assert.assertEquals(arg1,filme.getEstoque());
    }

}
