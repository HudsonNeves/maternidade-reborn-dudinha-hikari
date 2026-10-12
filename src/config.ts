// Substitua pelo número oficial com DDI + DDD, somente dígitos (ex.: 5561999999999).
export const WHATSAPP_NUMBER = ''
export function whatsappLink(message = 'Olá! Gostaria de conhecer os bebês reborn da Dudinha Hikari.') {
  const text = encodeURIComponent(message)
  return WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER}?text=${text}` : `mailto:contato@exemplo.com?subject=${encodeURIComponent('Contato - Dudinha Hikari')}&body=${text}`
}
