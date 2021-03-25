import React, { useState } from 'react';
import Modal from 'react-modal';

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GLobalStyle } from './styles/global';
import { TransactionProvider } from './hooks/useTransactions';


Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionOpen] = useState(false);

  function handleOpenNewTransactionModal() {
      setIsNewTransactionOpen(true);
  }

  function handleCloseNewTransactionModal() {
      setIsNewTransactionOpen(false);
  }

  return (
    <TransactionProvider>
      <Header onOpenewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GLobalStyle />
    </TransactionProvider>
  );
}

