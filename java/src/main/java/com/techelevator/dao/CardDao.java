package com.techelevator.dao;

import com.techelevator.model.Card;
import com.techelevator.model.Deck;
import com.techelevator.model.UserSession;

import java.util.List;

public interface CardDao {

    List<Card> getCards(int userId);

    Card getCardById(int cardId);

    int createCard(Card card);

    public int updateCard(int cardId, Card card);

    List<Deck> getDecks(int userId);

    int createDeck(Deck deck);

    int getNumberOfCards(int deckId);

    void putCardsInDeck(int deckId, int cardID);

    List<Card> getCardsByDeckId(int deckId);

    List<Card> getExcludedCards(int userId, int deckId);

    void clearCardDeck(int deckId);

    int updateDeck(int deckId, Deck deck);

    int saveSession(UserSession session);

    List<UserSession> getSessions(int userId);

    void deleteCardsFromDeck(int cardId);

    void deleteCard(int cardId);

    void deleteDeck(int deckId);

    void clearSessions(int userId);
}
