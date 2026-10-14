# DevSecOps Portfolio — Narjess Dabbech

## I. Mise en place initiale

### 1. Installation Ubuntu Server et configuration SSH sécurisé

**Système :** Ubuntu Server 22.04.5 LTS (VM VirtualBox)

**Installation du serveur SSH :**
```bash
sudo apt update
sudo apt install openssh-server -y
sudo systemctl enable ssh
sudo systemctl start ssh
