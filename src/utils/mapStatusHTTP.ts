export default function mapStatusHTTP(status: string): number {
  const statusHTTP: Record<string, number> = {
    INVALID_DATA: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 401,
    BAD_REQUEST: 400,
  };
  return statusHTTP[status] || 500;
}