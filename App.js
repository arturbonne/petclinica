import React, { useState } from 'react';
import { 
  StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert, SafeAreaView 
} from 'react-native';

/**
 * Aplicativo PetVida
 * Desenvolvido para resolver a dor do cliente referente a choques de horários
 * e esquecimento de vacinas na clínica do Dr. Gabriel e Dra. Camila.
 */
export default function App() {
  // Estado que controla qual tela está ativa no momento
  const [telaAtual, setTelaAtual] = useState('Home');

  // Estados para capturar dados dos formulários
  const [nomePet, setNomePet] = useState('');
  const [dataAgendamento, setDataAgendamento] = useState('');

  /**
   * Função para simular o agendamento no sistema.
   * Na vida real, isso se conectaria a uma API (Backend).
   */
  const handleAgendamento = () => {
    if (!dataAgendamento) {
      Alert.alert('Erro', 'Por favor, insira uma data e horário.');
      return;
    }
    Alert.alert('Sucesso!', 'Banho agendado com sucesso. A agenda de papel ficou no passado!');
    setDataAgendamento('');
    setTelaAtual('Home');
  };

  /**
   * Função para simular o upload da carteirinha de vacinação.
   */
  const handleCadastroPet = () => {
    if (!nomePet) {
      Alert.alert('Erro', 'Informe o nome do Pet para cadastrar a vacina.');
      return;
    }
    Alert.alert('Pronto!', `Carteirinha do ${nomePet} digitalizada com sucesso.`);
    setNomePet('');
    setTelaAtual('Home');
  };

  // --- COMPONENTES DAS TELAS --- //

  const renderHome = () => (
    <View style={styles.screen}>
      <Text style={styles.title}>Olá, Tutor!</Text>
      <Text style={styles.subtitle}>O que vamos fazer hoje?</Text>
      
      <View style={styles.cardAlert}>
        <Text style={styles.alertText}>
          ⚠️ Lembrete: A vacina V10 do seu pet vence em 15 dias. Agende o retorno preventivo!
        </Text>
      </View>
    </View>
  );

  const renderVacinas = () => (
    <View style={styles.screen}>
      <Text style={styles.title}>Cadastro & Vacinas</Text>
      <Text style={styles.subtitle}>Mantenha o histórico de saúde atualizado</Text>
      
      <TextInput 
        style={styles.input} 
        placeholder="Nome do Pet (Ex: Bidu)" 
        value={nomePet}
        onChangeText={setNomePet}
      />
      
      <TouchableOpacity style={styles.btnSecondary} onPress={() => Alert.alert('Câmera', 'Abrindo câmera do celular...')}>
        <Text style={styles.btnText}>📸 Fotografar Carteirinha</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnPrimary} onPress={handleCadastroPet}>
        <Text style={styles.btnText}>Salvar Histórico</Text>
      </TouchableOpacity>
    </View>
  );

  const renderAgenda = () => (
    <View style={styles.screen}>
      <Text style={styles.title}>Agendar Banho</Text>
      <Text style={styles.subtitle}>Escolha o melhor horário na PetVida</Text>

      <TextInput 
        style={styles.input} 
        placeholder="Data e Hora (Ex: 10/10 às 14:00)" 
        value={dataAgendamento}
        onChangeText={setDataAgendamento}
      />

      <TouchableOpacity style={styles.btnPrimary} onPress={handleAgendamento}>
        <Text style={styles.btnText}>Confirmar Agendamento</Text>
      </TouchableOpacity>
    </View>
  );

  const renderPagamento = () => (
    <View style={styles.screen}>
      <Text style={styles.title}>Pagamento Rápido</Text>
      <View style={styles.card}>
        <Text style={styles.subtitle}>Banho e Tosa - 05/10/2026</Text>
        <Text style={styles.price}>R$ 60,00</Text>
        <TouchableOpacity 
          style={styles.btnPix} 
          onPress={() => Alert.alert('PIX', 'Código PIX copiado com sucesso!')}
        >
          <Text style={styles.btnText}>Pagar com PIX copia e cola</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Cabeçalho Fixo */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>PetVida App</Text>
      </View>

      {/* Área de Conteúdo Rolável */}
      <ScrollView contentContainerStyle={styles.content}>
        {telaAtual === 'Home' && renderHome()}
        {telaAtual === 'Vacinas' && renderVacinas()}
        {telaAtual === 'Agenda' && renderAgenda()}
        {telaAtual === 'Pagamento' && renderPagamento()}
      </ScrollView>

      {/* Barra de Navegação Inferior */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => setTelaAtual('Home')}>
          <Text style={telaAtual === 'Home' ? styles.navTextActive : styles.navText}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => setTelaAtual('Vacinas')}>
          <Text style={telaAtual === 'Vacinas' ? styles.navTextActive : styles.navText}>Saúde</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => setTelaAtual('Agenda')}>
          <Text style={telaAtual === 'Agenda' ? styles.navTextActive : styles.navText}>Agenda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => setTelaAtual('Pagamento')}>
          <Text style={telaAtual === 'Pagamento' ? styles.navTextActive : styles.navText}>Pagar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// --- ESTILOS DO APLICATIVO --- //
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },
  header: {
    backgroundColor: '#2E8B57', // Verde PetVida
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#1e6a40',
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
    flexGrow: 1,
  },
  screen: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    marginBottom: 15,
  },
  btnPrimary: {
    backgroundColor: '#2E8B57',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  btnSecondary: {
    backgroundColor: '#6c757d',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  btnPix: {
    backgroundColor: '#32bcad', // Cor oficial do PIX
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  btnText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3, // Sombra no Android
    shadowColor: '#000', // Sombra no iOS
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  cardAlert: {
    backgroundColor: '#fff3cd',
    padding: 15,
    borderRadius: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#ffc107',
  },
  alertText: {
    color: '#856404',
    fontSize: 14,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    paddingBottom: 10, // Respiro para telas de iPhone
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
  },
  navText: {
    color: '#999',
    fontSize: 14,
  },
  navTextActive: {
    color: '#2E8B57',
    fontSize: 14,
    fontWeight: 'bold',
  },
});