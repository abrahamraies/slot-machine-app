import { Component } from '@angular/core';


@Component({
  selector: 'app-sentence-generator',
  templateUrl: './sentence-generator.component.html',
  styleUrls: ['./sentence-generator.component.css']
})

export class SentenceGeneratorComponent {

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


  verbs: string[] = ['buy', 'sell', 'write', 'read', 'eat', 'sleep', 'run', 'walk', 'swim', 'dance'];
  nouns: string[] = ['car', 'book', 'tree', 'friend', 'beach', 'doctor', 'cat', 'dog', 'house', 'city'];
  adjectives: string[] = ['new', 'happy', 'green', 'interesting', 'friendly', 'beautiful', 'exciting', 'delicious'];
  pronounObjects: string[] = ['me', 'you', 'him', 'her', 'it', 'us', 'them'];
  articles: string[] = ['The', 'A', 'An'];
  prepositions: string[] = ['to', 'on', 'under', 'above', 'between', 'with', 'for', 'in', 'around'];
  linkingVerbs: string[] = ['is', 'am', 'are', 'was', 'were', 'become', 'seem', 'feel', 'look', 'appear'];
  reflexiveVerbs: string[] = ['hurt', 'wash', 'dress', 'bathe', 'shave', 'behave', 'enjoy', 'primp'];
  reciprocalVerbs: string[] = ['hug', 'kiss', 'meet', 'marry', 'embrace', 'help', 'fight', 'love', 'forgive'];

  generateRandomWord(wordList: string[]): string {
    return wordList[Math.floor(Math.random() * wordList.length)];
  }

  generateRandomSentence(): void {
    this.clearFields();
    const randomNumber = Math.random();

    if (randomNumber <= 0.4) {
      this.generateCoherentSentence();
    } else {
      this.generateRandomWordsSentence();
    }
  }

  private generateCoherentSentence(): void {
    this.randomVerb = this.generateRandomWord(this.verbs);
    this.randomNoun = this.generateRandomWord(this.nouns);
    this.randomAdjective = this.generateRandomWord(this.adjectives);
    this.randomPronounObject = this.generateRandomWord(this.pronounObjects);
    this.randomArticle = this.generateRandomWord(this.articles);
    this.randomPreposition = this.generateRandomWord(this.prepositions);

    this.sentence = `${this.randomArticle} ${this.randomAdjective} ${this.randomNoun} ${this.randomVerb} ${this.randomPreposition} ${this.randomPronounObject}.`;
  }

  private generateRandomWordsSentence(): void {
    const randomWords = [
      this.generateRandomWord(this.verbs),
      this.generateRandomWord(this.nouns),
      this.generateRandomWord(this.pronounObjects),
      this.generateRandomWord(this.adjectives),
      this.generateRandomWord(this.articles),
      this.generateRandomWord(this.prepositions),
    ];

    this.sentence = randomWords.join(' ');
    this.invalidSentence = true;
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
