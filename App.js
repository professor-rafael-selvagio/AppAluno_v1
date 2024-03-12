import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, TextInput, TouchableOpacity, FlatList, Alert, ActivityIndicator } from 'react-native';
import axios from 'axios';

const App = () => {
  const [nome, setNome] = useState('Teste');
  const [idade, setIdade] = useState('32');
  const [dataNascimento, setDataNascimento] = useState('20/10/2018');
  const [alunos, setAlunos] = useState([]);
  const [loading, setLoading] = useState(true);

  const converterParaFormatoApi = (dataUsuario) => {
    
  };
  
  const converterParaFormatoUsuario = (dataApi) => {
    
  };
  
  const buscarAluno = async () => {
    
  };

  const cadastrarAluno = async () => {
    
  };
  
  const cancelarEdicao = () => {
   
  };
  
  const editarAluno = (id) => {
  
  };
  

  const excluirAluno = async (id) => {
    
  };

  useEffect(() => {
    buscarAluno();
  }, []);

  
  // Lógica de loading

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('./src/img/Aluno.png')}
        style={styles.headerImage}
      />
      <Text style={styles.title}>APP Cadastro de Aluno</Text>
      
      {/* Form Inicial */}
      <View style={styles.formContainer}>
        
      </View>
  
      <View style={styles.horizontalLine} />
  
      <FlatList
        data={alunos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.alunoItem}>
            <View style={styles.dadosContainer}>
              <Text>{item.nome}</Text>
              <Text>{item.idade} anos</Text>
              <Text>Data de Nascimento: {converterParaFormatoUsuario(item.dataNascimento, 'dd/MM/yyyy')}</Text>
            </View>
            <View style={styles.botoesContainer}>
              {editMode ? (
                // Modo de edição
                <TouchableOpacity
                  style={styles.cancelarButton}
                  onPress={cancelarEdicao}
                >
                  <Image
                      source={require('./src/img/IconCancela.jpg')}
                      style={styles.icon}
                    />
                </TouchableOpacity>
              ) : (
                // Modo padrão
                <>
                  <TouchableOpacity
                    style={styles.editButton}
                    onPress={() => editarAluno(item.id)}
                  >
                    <Image
                      source={require('./src/img/IconEdit.png')}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => excluirAluno(item.id)}
                  >
                    <Image
                      source={require('./src/img/IconExclui.png')}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                </>
              )}
            </View>
          </View>
        )}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  headerImage: {
    height: 250,
    width: 400,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  horizontalLine: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  formContainer: {
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  listContainer: {
    flex: 1,
    marginTop: 20,
  },
  alunoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  dadosContainer: {
    flex: 3,
  },
  botoesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
  editButton: {
    marginLeft: 10,
    padding: 5,
    borderRadius: 5,
  },
  deleteButton: {
    marginLeft: 10,
    padding: 5,
    borderRadius: 5,
  },
  icon: {
    width: 48, 
    height: 48,
  },
  cancelarButton: {
    marginLeft: 10,
    marginRight: 10,
    padding: 5,
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
