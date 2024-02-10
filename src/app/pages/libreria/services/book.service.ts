import { Injectable } from '@angular/core';
import { BookModel, IBook } from '../models/book.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: IBook[] = [
    new BookModel('Il nome della rosa', 'Umberto Eco', 1980, `
    "Il nome della rosa" è un romanzo scritto da Umberto Eco, pubblicato nel 1980. La storia è ambientata in un monastero benedettino nel Nord Italia nel 1327 e segue il frate francescano Guglielmo di Baskerville e il suo novizio Adso da Melk. Il romanzo è un misto di giallo, storia medievale, teologia e filosofia.
    
    Guglielmo, un ex inquisitore, è chiamato nel monastero per risolvere una serie di misteriosi omicidi. Le indagini di Guglielmo portano alla luce intrighi politici, rivalità religiose e conflitti culturali. Nel corso della storia, il romanzo esplora temi come la conoscenza, il potere, la fede e la corruzione.
    
    "Il nome della rosa" è famoso per la sua complessità e profondità intellettuale, nonché per il modo in cui mescola il mistero con elementi storici e filosofici. Il libro ha avuto un grande successo internazionale ed è stato adattato in un film nel 1986 con Sean Connery nel ruolo principale.`),
    new BookModel('1984', 'George Orwell', 1949, `
    "1984" è un romanzo distopico scritto da George Orwell e pubblicato nel 1949. Il libro è ambientato in un mondo totalitario dominato da tre superpotenze in costante guerra, con un governo oppressivo noto come il Partito che controlla ogni aspetto della vita dei cittadini.
    
    Il protagonista, Winston Smith, lavora al Ministero della Verità e inizia a ribellarsi contro il controllo oppressivo del Partito. Winston si imbatte in Julia, un'altra ribelle, e insieme cercano di sfidare il governo. Tuttavia, vengono scoperti dal Partito e sottoposti a un brutale processo di rieducazione.
    
    Il romanzo esplora temi come la manipolazione della verità, la sorveglianza di massa, la perdita della libertà individuale e il pericolo di un governo totalitario. La figura del Grande Fratello, una rappresentazione del governo onnipresente e invasivo, è diventata un'icona della letteratura distopica.
    
    "1984" è ampiamente considerato uno dei romanzi più influenti del XX secolo e ha lasciato un'impronta duratura nella cultura popolare. La sua visione cupa e avvertente della società totalitaria continua a suscitare riflessioni e discussioni sulla natura del potere, della libertà e della verità.`),
    new BookModel('Lo straniero', 'Albert Camus', 1942, `
    "Lo Straniero" è un romanzo scritto da Albert Camus e pubblicato nel 1942. La storia è ambientata in Algeria durante gli anni '30 e segue il protagonista, Meursault, un uomo apatico e distante.
    
    La narrazione inizia con la morte della madre di Meursault. La reazione di Meursault alla sua morte è apparentemente indifferente e priva di emozione. Successivamente, Meursault si coinvolge in una relazione casuale con una donna di nome Marie e diventa amico di un vicino di nome Raymond, coinvolgendosi in situazioni complesse e ambigue.
    
    L'evento centrale del romanzo è l'omicidio di un arabo sulla spiaggia da parte di Meursault sotto il caldo sole estivo. La storia segue il processo di Meursault e riflette sulla sua filosofia di vita basata sull'assurdità, caratterizzata dall'indifferenza e dalla mancanza di senso nella vita umana.
    
    "Lo Straniero" è noto per esplorare temi filosofici come l'assurdità della vita, l'estraneità e l'indifferenza, che sono elementi chiave della filosofia dell'assurdità sviluppata da Camus. Il romanzo è considerato un classico della letteratura esistenzialista e ha influenzato significativamente la letteratura del XX secolo.`),
    new BookModel('Alla ricerca del tempo perduto', 'Marcel Proust', 1927, `
    "Alla ricerca del tempo perduto" è un monumentale romanzo scritto da Marcel Proust, composto in sette volumi e pubblicato tra il 1913 e il 1927. L'opera è nota anche come "La Recherche" (La Ricerca) ed è uno dei più importanti lavori della letteratura mondiale.
    
    La trama del romanzo è complessa e intricata. Il narratore, spesso identificato con lo stesso Proust, riflette sulla sua vita, sulla società francese dell'epoca e sui temi universali dell'amore, della memoria, del tempo e dell'arte.
    
    Il nucleo centrale della trama ruota attorno alle esperienze del narratore in relazione al tempo e alla memoria. Il più celebre episodio del romanzo è la famosa "madeleine" (una piccola torta) che evoca ricordi d'infanzia e introduce il tema della memoria involontaria.
    
    Il lavoro di Proust è noto per il suo stile proseguo, l'analisi psicologica dettagliata dei personaggi e la riflessione filosofica sulla natura del tempo, della memoria e dell'arte. L'opera è spesso considerata una delle maggiori realizzazioni letterarie del XX secolo ed è stata influente per numerosi scrittori successivi.
    
    "Alla ricerca del tempo perduto" è un'opera impegnativa, ma è anche ricca di bellezza e profondità. La sua lettura è un'esperienza che può offrire una comprensione unica della complessità umana.`),
    new BookModel('Il piccolo principe', 'Antoine de Saint-Exupéry', 1943, `
"Il Piccolo Principe" è un celebre romanzo breve scritto da Antoine de Saint-Exupéry e pubblicato per la prima volta nel 1943. È un libro che ha affascinato lettori di tutte le età e ha guadagnato una posizione di rilievo nella letteratura mondiale.

La storia è raccontata da un aviatore bloccato nel deserto del Sahara, che incontra un piccolo principe proveniente da un piccolo pianeta chiamato "B-612". Il Piccolo Principe è un personaggio straordinario, con una visione del mondo semplice, ma profondamente saggia.

Il Piccolo Principe narra le sue avventure e le persone che ha incontrato durante i suoi viaggi tra diversi pianeti, ognuno rappresentante un aspetto della natura umana e delle relazioni. Il romanzo esplora temi come l'innocenza, l'amicizia, la solitudine, e offre riflessioni filosofiche sulla vita e sull'importanza di vedere con il cuore anziché solo con gli occhi.

Una delle citazioni più famose del libro è "Si vede bene solo col cuore. L'essenziale è invisibile agli occhi", che incarna il messaggio centrale del romanzo.

"Il Piccolo Principe" è diventato un classico della letteratura mondiale ed è tradotto in numerose lingue. La sua semplicità e profondità lo rendono un libro atemporale che continua a ispirare lettori di tutte le età.`)
  ];

  private booksSubject: BehaviorSubject<IBook[]> = new BehaviorSubject(this.books);
  public books$: Observable<IBook[]> = this.booksSubject.asObservable();

  constructor() { }

  addBook(book: IBook): void {
    this.books.push(book);
    this.booksSubject.next(this.books);
  }

  removeBook(index: number): void {
    this.books.splice(index, 1);
    this.booksSubject.next(this.books);
  }

  updateBook(index: number, book: IBook): void {
    this.books[index] = book;
    this.booksSubject.next(this.books);
  }
}
