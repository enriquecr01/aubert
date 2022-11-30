const languages = {
    MX: {
        passwords: 'Contraseñas',
        passwordswifi: 'Contraseñas de WiFi',
        notes: 'Notas',
        logout: 'Cerrar Sesión',
        copy: 'Copiar al portapapeles',
        gosite: 'Ir al sitio',
        edit: 'Editar',
        delete: 'Eliminar',
    }, 
    EN: {
        passwords: 'Passwords',
        passwordswifi: 'WiFi passwords',
        notes: 'Notes',
        logout: 'Logout',
        copy: 'Copy to clipboard',
        gosite: 'Go the site',
        edit: 'Edit',
        delete: 'Delete',
    },
    FR: {
        passwords: 'Mots de passe',
        passwordswifi: 'Mots de passe Wi-Fi',
        notes: 'Notes',
        logout: 'Fermer la session',
        copy: 'Copier dans le presse-papier',
        gosite: 'Aller sur le site',
        edit: 'Éditer',
        delete: 'Retirer',
    }
}

export function getWord(language, word) {
    return languages[language][word]
}