export interface SettlementDTO {
    id: string;
    player_id: string;
    name: string;
    behaviors?: string;
    production_queue?: string;
    x: number;
    y: number;
}