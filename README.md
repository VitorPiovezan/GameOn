When someone wants to clone the repository, in order to the react-native modules work, you should have yarn installed in your computer, and inside the project folder, run "yarn install" to get all the node_modules of the project.

# GameOn

no arquivo da extenção popup ui aplicar o código do txt 'popupui index.txt'

----------------------------------------------------------------------------
19-02-20

Na alteração de const para class, tive que mudar o metodo que implantei as rotas. Reorganizei tambem a estrutura dos arquivos, mudando as rotas de um index para um arquivo router

Segui esses sites: 

https://www.javatpoint.com/react-native-create-material-top-tab-navigator
https://reactnavigation.org/docs/en/navigation-options-resolution.html

Lembrete: para retirar um Header de menus no Navition, aplicar no arquivo de rota o efeito de headerShown: false.

---------------------------------------------------------------------------

Adicionei Link no botão do modal, busquei nos seguintes sites

https://facebook.github.io/react-native/docs/linking
https://stackoverflow.com/questions/43804032/open-url-in-default-web-browser

Utilizei a seguinte solução:

Adicionei em um botão esse metodo: onPress={ ()=>{ Linking.openURL('https://google.com')}}


---------------------------------------------------------------------------
