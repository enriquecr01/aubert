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
        instructions: 'Haz clic en una contraseña',
        titleEdit: 'Editar contraseña',
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
        instructions: 'Click on a password',
        titleEdit: 'Edit password',
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
        instructions: 'Cliquez sur un mot de passe',
        titleEdit: 'Éditer mot de passe',
    }
}

export function getWord(language, word) {
    return languages[language][word]
}