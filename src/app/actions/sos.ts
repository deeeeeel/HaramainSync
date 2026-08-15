"use server";

export async function sendSOSEmergency(type: string) {
  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 1500));
  
  // Here we would typically insert into database and trigger realtime push (e.g. Supabase Realtime / Pusher)
  console.log(`[SOS TRIGGERED] Type: ${type} - Sent to Mutawwif Live Tracking Dashboard`);
  
  return { success: true, message: "Bantuan segera datang. Mohon tetap tenang." };
}
