import { Component } from '@angular/core';

@Component({
  selector: 'app-sentence-generator',
  templateUrl: './sentence-generator.component.html',
  styleUrls: ['./sentence-generator.component.css']
})

export class SentenceGeneratorComponent {
  // Listas de palabras reales basadas en los patrones de valencia
  verbs: string[] = ['buy', 'sell', 'write', 'read', 'eat', 'sleep', 'run', 'walk', 'swim', 'dance'];
  nouns: string[] = ['car', 'book', 'tree', 'friend', 'beach', 'doctor', 'cat', 'dog', 'house', 'city'];
  adjectives: string[] = ['new', 'happy', 'green', 'interesting', 'friendly', 'beautiful', 'exciting', 'delicious'];
  pronounObjects: string[] = ['me', 'you', 'him', 'her', 'it', 'us', 'them'];
  articles: string[] = ['The', 'A', 'An'];
  prepositions: string[] = ['to', 'on', 'under', 'above', 'between', 'with', 'for', 'in', 'around'];
  linkingVerbs: string[] = ['is', 'am', 'are', 'was', 'were', 'become', 'seem', 'feel', 'look', 'appear'];
  reflexiveVerbs: string[] = ['hurt', 'wash', 'dress', 'bathe', 'shave', 'behave', 'enjoy', 'primp'];
  reciprocalVerbs: string[] = ['hug', 'kiss', 'meet', 'marry', 'embrace', 'help', 'fight', 'love', 'forgive'];

  randomVerb: string = '';
  randomNoun: string = '';
  randomAdjective: string = '';
  randomPronounObject: string = '';
  randomArticle: string = '';
  randomPreposition: string = '';
  randomLinkingVerb: string = '';
  randomReflexiveVerb: string = '';
  randomReciprocalVerb: string = '';
  sentence: string = '';
  invalidSentence: boolean = false;
  nombre: string = 'Abraham';


  generateRandomWord(wordList: string[]): string {
    console.log(wordList[1]);
    console.log(wordList.length);
    return wordList[Math.floor(Math.random() * wordList.length)];
  }

  generateRandomSentence(): void {
    const randomNumber = Math.random(); // Número aleatorio entre 0 y 1

    // Limpiar el estado previo
    this.sentence = '';
    this.invalidSentence = false;

    if (randomNumber <= 0.4) {
      // Oración con sentido
      this.randomVerb = this.generateRandomWord(this.verbs);
      this.randomNoun = this.generateRandomWord(this.nouns);
      this.randomAdjective = this.generateRandomWord(this.adjectives);
      this.randomPronounObject = this.generateRandomWord(this.pronounObjects);
      this.randomArticle = this.generateRandomWord(this.articles);
      this.randomPreposition = this.generateRandomWord(this.prepositions);
      this.randomLinkingVerb = this.generateRandomWord(this.linkingVerbs);
      this.randomReflexiveVerb = this.generateRandomWord(this.reflexiveVerbs);
      this.randomReciprocalVerb = this.generateRandomWord(this.reciprocalVerbs);

      // Estructura coherente
      this.sentence = `${this.randomArticle} ${this.randomAdjective} ${this.randomNoun} ${this.randomVerb} ${this.randomPreposition} ${this.randomPronounObject}.`;
    } else {
      // Oración sin sentido
      const randomWords = [
        this.generateRandomWord(this.verbs),
        this.generateRandomWord(this.nouns),
        this.generateRandomWord(this.pronounObjects),
        this.generateRandomWord(this.adjectives),
        this.generateRandomWord(this.articles),
        this.generateRandomWord(this.prepositions),
        this.generateRandomWord(this.linkingVerbs),
        this.generateRandomWord(this.reflexiveVerbs),
        this.generateRandomWord(this.reciprocalVerbs)
      ];
      randomWords.sort(() => Math.random() - 0.5); // Mezcla las palabras
      this.sentence = randomWords.join(' ');
      this.invalidSentence = true;
    }
  }

  clearFields(): void {
    this.randomVerb = '';
    this.randomNoun = '';
    this.randomAdjective = '';
    this.randomPronounObject = '';
    this.randomArticle = '';
    this.randomPreposition = '';
    this.randomLinkingVerb = '';
    this.randomReflexiveVerb = '';
    this.randomReciprocalVerb = '';
    this.sentence = '';
    this.invalidSentence = false;
  }
}
