function mostrarTabs(textTabs, sw) {
            var tabs = $("body > app-root > app-base > div > div > div > div > app-forms > div > div > div > div > form > ul > li")
            for (var i = 0; i <= tabs.length - 1; i++) {
                for (let j = 0; j < textTabs.length; j++) {
                    if ($("body > app-root > app-base > div > div > div > div > app-forms > div > div > div > div > form > ul > li")[i].children[0].innerHTML.trim() == textTabs[j]) {

                        if (sw) {
                            $("body > app-root > app-base > div > div > div > div > app-forms > div > div > div > div > form > ul > li")[i].children[0].style.display = 'block';
                        } else {
                            $("body > app-root > app-base > div > div > div > div > app-forms > div > div > div > div > form > ul > li")[i].children[0].style.display = 'none';
                        }
                    }
                }
            }
        }


mostraTabs(['nombreTab1','nombreTab2'], false) //oculta
mostraTabs(['nombreTab1','nombreTab2'], true) //muestra