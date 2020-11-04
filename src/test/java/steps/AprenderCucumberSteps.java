package steps;

import converter.DateConverter;
import cucumber.api.Transform;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import org.junit.Assert;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;


public class AprenderCucumberSteps {
    @Dado("^que criei o arquivo corretamente$")
    public void queCrieiArquivoCorretamente() throws Throwable {
        System.out.println("qualquer coisa");
    }

    @Quando("^executá-lo$")
    public void executaLo() throws Throwable {
    }

    @Então("^a especificação deve finalizar com sucesso$")
    public void aEspecificaçãoDeveFinalizarComSucesso() throws Throwable {
    }

    //Contador

    private int contador = 0;

    @Dado("^que o valor do contador é (\\d+)$")
    public void que_o_valor_do_contador_é(int arg1) throws Throwable {
        contador = arg1;
    }

    @Quando("^eu incrementar em (\\d+)$")
    public void eu_incrementar_em(int arg1) throws Throwable {
        contador = contador + arg1;
    }

    @Então("^o valor do contador será (\\d+)$")
    public void o_valor_do_contador_será(int arg1) throws Throwable {
        Assert.assertEquals(arg1, contador);
    }

    //Calculo atraso na entrega
    Date entrega = new Date();

    @Dado("^que o prazo é dia (.*)$")
    public void que_o_prazo_é_dia(@Transform(DateConverter.class)Date data) throws Throwable {
    entrega= data;
        System.out.println(entrega);
    }

    @Quando("^a entrega atrasa em (\\d+) (dia|dias|mes|meses)$")
    public void a_entrega_atrasa_em_dias(int arg1, String tempo) throws Throwable {
        Calendar cal = Calendar.getInstance();
        cal.setTime(entrega);
        if(tempo.equals("dias")){
            cal.add(Calendar.DAY_OF_MONTH,arg1);
        }
        if(tempo.equals("meses")){
            cal.add(Calendar.MONTH,arg1);
        }
        entrega = cal.getTime();
    }

    @Então("^a entrega será efetuada em (\\d{2}\\/\\d{2}\\/\\d{4})$")
    public void a_entrega_será_efetuada_em(String data) throws Throwable {
        DateFormat format = new SimpleDateFormat("dd/MM/yyyy");
        String dataFormatada = format.format(entrega);
        Assert.assertEquals(data, dataFormatada);
    }

    //Desafio

    @Dado("^que o ticket( especial)? é (A.\\d{3})$")
    public void queOTicketÉAF(String tipo, String arg1) throws Throwable {
    }

    @Dado("^que o valor da passagem é R\\$ (.*)$")
    public void queOValorDaPassagemÉR$(Double numero) throws Throwable {
        System.out.println(numero);
    }

    @Dado("^que o nome do passageiro é \"(.{5,20})\"$")
    public void queONomeDoPassageiroE(String nome) throws Throwable {
    }

    @Dado("^que o telefone do passageiro é (9\\d{3}-\\d{4})$")
    public void queOtelefoneDoPassageiroE(String telefone) throws Throwable {    }

    @Quando("^criar os steps$")
    public void criarOsSteps() throws Throwable {
    }

    @Então("^o teste vai funcionar$")
    public void oTesteVaiFuncionar() throws Throwable {
    }

}



