import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.http.HttpResponse.BodyHandlers;
import java.util.List;
import java.util.Map;

public class App {
    public static void main(String[] args) throws Exception {

        // fazer uma conexão HTTP e buscar os TOP 250 filmes
        String url = "https://raw.githubusercontent.com/alexfelipe/imersao-java/json/top250.json";
        URI endereco = URI.create(url);
        var client = HttpClient.newHttpClient();
        var request = HttpRequest.newBuilder(endereco).GET().build();
        HttpResponse<String> response = client.send(request, BodyHandlers.ofString());
        String body = response.body();
        System.out.println(body);
        
        // extrair os dados que interessam (títulos, pôster, classificação)
        List<Map<String, String>> listaDeFilmes;

        // exibir e manipular os dados
    }
}
