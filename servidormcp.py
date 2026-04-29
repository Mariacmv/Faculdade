from mcp.server.fastmcp import FastMCP

#crio uma instância e defino um nome 
servidor = FastMCP("ServidorMCP")

#execução
servidor.run()