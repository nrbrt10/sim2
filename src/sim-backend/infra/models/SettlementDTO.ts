export interface SettlementDTO {
    id: string;
    player_id: string;
    name: string;
    behaviors?: string | null;
    production_queue?: string;
    x: number;
    y: number;
}