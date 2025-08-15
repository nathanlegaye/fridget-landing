# Configuration Supabase pour Fridget

## 🗄️ **Configuration de la base de données**

### **1. Créez un projet Supabase :**
- Allez sur [supabase.com](https://supabase.com)
- Créez un compte gratuit
- Créez un nouveau projet

### **2. Créez la table `notifications` :**
Dans l'éditeur SQL de Supabase, exécutez :

```sql
CREATE TABLE notifications (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status VARCHAR(50) DEFAULT 'active',
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index pour optimiser les recherches par email
CREATE INDEX idx_notifications_email ON notifications(email);

-- Index pour optimiser les recherches par statut
CREATE INDEX idx_notifications_status ON notifications(status);
```

### **3. Configurez les variables d'environnement :**
Ajoutez dans votre `.env.local` :

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://votre-projet.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre-clé-anon-supabase

# Resend (déjà configuré)
RESEND_API_KEY=re_945P1NZz_5Gw6oPGoyeEqR1gFhAXH5y3q
```

### **4. Récupérez vos clés Supabase :**
- **URL** : Settings → API → Project URL
- **Anon Key** : Settings → API → anon public

## 🚀 **Fonctionnalités implémentées :**

✅ **Stockage des emails** dans Supabase  
✅ **Vérification des doublons** (email unique)  
✅ **Email de confirmation** via Resend  
✅ **Gestion des erreurs** et validation  
✅ **Interface utilisateur** avec feedback en temps réel  

## 📧 **Email de confirmation :**

- **Sujet** : "🎉 Bienvenue sur la liste de notification Fridget !"
- **Design** : Couleur #FF9030, logo Fridget
- **Contenu** : Bonus exclusifs, accès prioritaire, promotions

## 🔒 **Sécurité :**

- Validation des emails côté serveur
- Protection contre les inscriptions multiples
- Gestion des erreurs robuste

## 💰 **Coûts :**

- **Supabase** : Gratuit (500MB, 50,000 lignes)
- **Resend** : Gratuit (100 emails/mois)
- **Total** : 0€ pour commencer !
