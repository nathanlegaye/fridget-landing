# Configuration du formulaire de contact Fridget

## 📧 Configuration de l'envoi d'emails

### 1. Créez un compte Resend (gratuit)
- Allez sur [https://resend.com](https://resend.com)
- Créez un compte gratuit (100 emails/mois)
- Récupérez votre clé API

### 2. Configurez les variables d'environnement
Créez un fichier `.env.local` à la racine du projet :

```bash
# Clé API Resend pour l'envoi d'emails
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### 3. Vérifiez la configuration
- Les emails seront envoyés à : `contact.fridget@gmail.com`
- L'expéditeur sera : `noreply@fridget.com`
- Les utilisateurs peuvent répondre directement à votre Gmail

## 🚀 Déploiement

### Vercel (recommandé)
1. Connectez votre repo GitHub à Vercel
2. Ajoutez la variable `RESEND_API_KEY` dans les paramètres Vercel
3. Déployez automatiquement

### Variables d'environnement Vercel
- `RESEND_API_KEY` : Votre clé API Resend

## ✨ Fonctionnalités du formulaire

- ✅ Validation des champs
- ✅ Gestion des états (envoi, succès, erreur)
- ✅ Design responsive avec la couleur #FF9030
- ✅ Police Pally partout
- ✅ Messages de confirmation/erreur

## 📱 Test

1. Remplissez le formulaire sur votre landing
2. Cliquez sur "Envoyer le message"
3. Vérifiez votre Gmail `contact.fridget@gmail.com`
4. Vous recevrez un email formaté avec toutes les informations

## 💰 Coûts

- **Resend** : Gratuit (100 emails/mois)
- **Vercel** : Gratuit pour débuter
- **Total** : 0€ pour commencer !
