let initialState={
    loading:false,
    peerInputDetails:[{
        "name": "hongdtpeer1",
        "fqdn": "hongdtpeer1.blockchain.honeywell.com",
        "nodeType": 1,
        "enrollId": "hongdtpeer1-admin",
        "enrollSecret": "hongdtpeer1-adminpw",
        "ipAddress": "10.10.1.198",
        "gossipPort": 7053,
        "enableTLSAuth": true,
        "enableClientTLSAuth": true,
        "enableOpTLSAuth": true,
        "enableOpClientTLSAuth": true,
        "eventHubPort": 7054,
        "opServicePort": 7443,
        "adminCert":"-----BEGIN CERTIFICATE-----\nMIICGjCCAcCgAwIBAgIRAIPRwJHVLhHK47XK0BbFZJswCgYIKoZIzj0EAwIwczEL\nMAkGA1UEBhMCVVMxEzARBgNVBAgTCkNhbGlmb3JuaWExFjAUBgNVBAcTDVNhbiBG\ncmFuY2lzY28xGTAXBgNVBAoTEG9yZzIuZXhhbXBsZS5jb20xHDAaBgNVBAMTE2Nh\nLm9yZzIuZXhhbXBsZS5jb20wHhcNMTcwNjIzMTIzMzE5WhcNMjcwNjIxMTIzMzE5\nWjBbMQswCQYDVQQGEwJVUzETMBEGA1UECBMKQ2FsaWZvcm5pYTEWMBQGA1UEBxMN\nU2FuIEZyYW5jaXNjbzEfMB0GA1UEAwwWVXNlcjFAb3JnMi5leGFtcGxlLmNvbTBZ\nMBMGByqGSM49AgEGCCqGSM49AwEHA0IABBd9SsEiFH1/JIb3qMEPLR2dygokFVKW\neINcB0Ni4TBRkfIWWUJeCANTUY11Pm/+5gs+fBTqBz8M2UzpJDVX7+2jTTBLMA4G\nA1UdDwEB/wQEAwIHgDAMBgNVHRMBAf8EAjAAMCsGA1UdIwQkMCKAIKfUfvpGproH\ncwyFD+0sE3XfJzYNcif0jNwvgOUFZ4AFMAoGCCqGSM49BAMCA0gAMEUCIQC8NIMw\ne4ym/QRwCJb5umbONNLSVQuEpnPsJrM/ssBPvgIgQpe2oYa3yO3USro9nBHjpM3L\nKsFQrpVnF8O6hoHOYZQ=\n-----END CERTIFICATE-----",
        "adminKey":"-----BEGIN PRIVATE KEY-----\nMIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQgmHG6n4ZvwUeV4jCp\nkvAmGSQKZ+vOYsyzRZgYwORO+vChRANCAAQXfUrBIhR9fySG96jBDy0dncoKJBVS\nlniDXAdDYuEwUZHyFllCXggDU1GNdT5v/uYLPnwU6gc/DNlM6SQ1V+/t\n-----END PRIVATE KEY-----",
        "serverCert":"-----BEGIN CERTIFICATE-----\nMIICGjCCAcCgAwIBAgIRAIPRwJHVLhHK47XK0BbFZJswCgYIKoZIzj0EAwIwczEL\nMAkGA1UEBhMCVVMxEzARBgNVBAgTCkNhbGlmb3JuaWExFjAUBgNVBAcTDVNhbiBG\ncmFuY2lzY28xGTAXBgNVBAoTEG9yZzIuZXhhbXBsZS5jb20xHDAaBgNVBAMTE2Nh\nLm9yZzIuZXhhbXBsZS5jb20wHhcNMTcwNjIzMTIzMzE5WhcNMjcwNjIxMTIzMzE5\nWjBbMQswCQYDVQQGEwJVUzETMBEGA1UECBMKQ2FsaWZvcm5pYTEWMBQGA1UEBxMN\nU2FuIEZyYW5jaXNjbzEfMB0GA1UEAwwWVXNlcjFAb3JnMi5leGFtcGxlLmNvbTBZ\nMBMGByqGSM49AgEGCCqGSM49AwEHA0IABBd9SsEiFH1/JIb3qMEPLR2dygokFVKW\neINcB0Ni4TBRkfIWWUJeCANTUY11Pm/+5gs+fBTqBz8M2UzpJDVX7+2jTTBLMA4G\nA1UdDwEB/wQEAwIHgDAMBgNVHRMBAf8EAjAAMCsGA1UdIwQkMCKAIKfUfvpGproH\ncwyFD+0sE3XfJzYNcif0jNwvgOUFZ4AFMAoGCCqGSM49BAMCA0gAMEUCIQC8NIMw\ne4ym/QRwCJb5umbONNLSVQuEpnPsJrM/ssBPvgIgQpe2oYa3yO3USro9nBHjpM3L\nKsFQrpVnF8O6hoHOYZQ=\n-----END CERTIFICATE-----",
        "serverKey":"-----BEGIN PRIVATE KEY-----\nMIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQgmHG6n4ZvwUeV4jCp\nkvAmGSQKZ+vOYsyzRZgYwORO+vChRANCAAQXfUrBIhR9fySG96jBDy0dncoKJBVS\nlniDXAdDYuEwUZHyFllCXggDU1GNdT5v/uYLPnwU6gc/DNlM6SQ1V+/t\n-----END PRIVATE KEY-----",
        "tlsServerCert":"-----BEGIN CERTIFICATE-----\nMIICGjCCAcCgAwIBAgIRAIPRwJH7LhHK47XK0BbFzJswCgYIKoZIzj0EAwIwczEL\nMAkGA1UEBhMCVVMxEzARBgNVBAgTCkNhbGlmb3JuaWExFjAUBgNVBAcTDVNhbiBG\ncmFuY2lzY28xGTAXBgNVBAoTEG9yZzIuZXhhbXBsZS5jb20xHDAaBgNVBAMTE2Nh\nLm9yZzIuZXhhbXBsZS5jb20wHhcNMTcwNjIzMTIzMzE5WhcNMjcwNjIxMTIzMzE5\nWjBbMQswCQYDVQQGEwJVUzETMBEGA1UECBMKQ2FsaWZvcm5pYTEWMBQGA1UEBxMN\nU2FuIEZyYW5jaXNjbzEfMB0GA1UEAwwWVXNlcjFAb3JnMi5leGFtcGxlLmNvbTBZ\nMBMGByqGSM49AgEGCCqGSM49AwEHA0IABBd9SsEiFH1/JIb3qMEPLR2dygokFVKW\neINcB0Ni4TBRkfIWWUJeCANTUY11Pm/+5gs+fBTqBz8M2UzpJDVX7+2jTTBLMA4G\nA1UdDwEB/wQEAwIHgDAMBgNVHRMBAf8EAjAAMCsGA1UdIwQkMCKAIKfUfvpGproH\ncwyFD+0sE3XfJzYNcif0jNwvgOUFZ4AFMAoGCCqGSM49BAMCA0gAMEUCIQC8NIMw\ne4ym/QRwCJb5umbONNLSVQuEpnPsJrM/ssBPvgIgQpe2oYa3yO3USro9nBHjpM3L\nKsFQrpVnF8O6hoHOYZQ=\n-----END CERTIFICATE-----",
        "tlsServerKey":"-----BEGIN PRIVATE KEY-----\nMIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQgmHG6n4ZvwUeV4jCp\nkvAmGSQKZ+vOYsyzRZgYwORO+vChRANCAAQXfUrBIhR9fySG96jBDy0dncoKJBVS\nlniDXAdDYuEwUZHyFllCXggDU1GNdT5v/uYLPnwU6gc/DNlM6SQ1V+/t\n-----END PRIVATE KEY-----",
        "tlsClientCert":"-----BEGIN CERTIFICATE-----\nMIICGjCCAcCgAwIBAgIRAIPRwJH7LhHK47XK0BbFzJswCgYIKoZIzj0EAwIwczEL\nMAkGA1UEBhMCVVMxEzARBgNVBAgTCkNhbGlmb3JuaWExFjAUBgNVBAcTDVNhbiBG\ncmFuY2lzY28xGTAXBgNVBAoTEG9yZzIuZXhhbXBsZS5jb20xHDAaBgNVBAMTE2Nh\nLm9yZzIuZXhhbXBsZS5jb20wHhcNMTcwNjIzMTIzMzE5WhcNMjcwNjIxMTIzMzE5\nWjBbMQswCQYDVQQGEwJVUzETMBEGA1UECBMKQ2FsaWZvcm5pYTEWMBQGA1UEBxMN\nU2FuIEZyYW5jaXNjbzEfMB0GA1UEAwwWVXNlcjFAb3JnMi5leGFtcGxlLmNvbTBZ\nMBMGByqGSM49AgEGCCqGSM49AwEHA0IABBd9SsEiFH1/JIb3qMEPLR2dygokFVKW\neINcB0Ni4TBRkfIWWUJeCANTUY11Pm/+5gs+fBTqBz8M2UzpJDVX7+2jTTBLMA4G\nA1UdDwEB/wQEAwIHgDAMBgNVHRMBAf8EAjAAMCsGA1UdIwQkMCKAIKfUfvpGproH\ncwyFD+0sE3XfJzYNcif0jNwvgOUFZ4AFMAoGCCqGSM49BAMCA0gAMEUCIQC8NIMw\ne4ym/QRwCJb5umbONNLSVQuEpnPsJrM/ssBPvgIgQpe2oYa3yO3USro9nBHjpM3L\nKsFQrpVnF8O6hoHOYZQ=\n-----END CERTIFICATE-----",
        "tlsClientKey":"-----BEGIN PRIVATE KEY-----\nMIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQgmHG6n4ZvwUeV4jCp\nkvAmGSQKZ+vOYsyzRZgYwORO+vChRANCAAQXfUrBIhR9fySG96jBDy0dncoKJBVS\nlniDXAdDYuEwUZHyFllCXggDU1GNdT5v/uYLPnwU6gc/DNlM6SQ1V+/t\n-----END PRIVATE KEY-----",
        "tlsOpsServerCert":"-----BEGIN CERTIFICATE-----\nMIICGjCCAcCgAwIBAgIRAIPRwJH7LhHK47XK0BbFzJswCgYIKoZIzj0EAwIwczEL\nMAkGA1UEBhMCVVMxEzARBgNVBAgTCkNhbGlmb3JuaWExFjAUBgNVBAcTDVNhbiBG\ncmFuY2lzY28xGTAXBgNVBAoTEG9yZzIuZXhhbXBsZS5jb20xHDAaBgNVBAMTE2Nh\nLm9yZzIuZXhhbXBsZS5jb20wHhcNMTcwNjIzMTIzMzE5WhcNMjcwNjIxMTIzMzE5\nWjBbMQswCQYDVQQGEwJVUzETMBEGA1UECBMKQ2FsaWZvcm5pYTEWMBQGA1UEBxMN\nU2FuIEZyYW5jaXNjbzEfMB0GA1UEAwwWVXNlcjFAb3JnMi5leGFtcGxlLmNvbTBZ\nMBMGByqGSM49AgEGCCqGSM49AwEHA0IABBd9SsEiFH1/JIb3qMEPLR2dygokFVKW\neINcB0Ni4TBRkfIWWUJeCANTUY11Pm/+5gs+fBTqBz8M2UzpJDVX7+2jTTBLMA4G\nA1UdDwEB/wQEAwIHgDAMBgNVHRMBAf8EAjAAMCsGA1UdIwQkMCKAIKfUfvpGproH\ncwyFD+0sE3XfJzYNcif0jNwvgOUFZ4AFMAoGCCqGSM49BAMCA0gAMEUCIQC8NIMw\ne4ym/QRwCJb5umbONNLSVQuEpnPsJrM/ssBPvgIgQpe2oYa3yO3USro9nBHjpM3L\nKsFQrpVnF8O6hOYZQ=\n-----END CERTIFICATE-----",
        "tlsOpsServerKey":"-----BEGIN PRIVATE KEY-----\nMIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQgmHG6n4ZvwUeV4jCp\nkvAmGSQKZ+vOYsyzRZgYwORO+vChRANCAAQXfUrBIhR9fySG96jBDy0dncoKJBVS\nlniDXAdDYuEwUZHyFllCXggDU1GNdT5v/uYLPnwU6gc/DNlM6SQV+/t\n-----END PRIVATE KEY-----",
        "tlsServerRootCAId": "5e54eb5fc4e9336a6bcd84bd",
        "tlsClientRootCAId": "5e54eb8cc4e9336a6bcd84be",
        "tlsOpsServerRootCAId": "5e54eb5fc4e9336a6bcd84bd",
        "tlsOpsClientRootCAId": "5e54eb8cc4e9336a6bcd84be",
        "stateDB":{
            "name": "couchDBpeer1",
            "fqdn": "couchDBpeer1.blockchain.honeywell.com",
            "port": 5089,
            "dbUser": "couchDBpeer1-admin",
            "dbPassword": "couchDBpeer1-adminpw"
        }
    },{
        "name": "hongdtpeer2",
        "fqdn": "hongdtpeer2.blockchain.honeywell.com",
        "nodeType": 1,
        "enrollId": "hongdtpeer2-admin",
        "enrollSecret": "hongdtpeer2-adminpw",
        "ipAddress": "10.10.1.198",
        "gossipPort": 7053,
        "enableTLSAuth": true,
        "enableClientTLSAuth": true,
        "enableOpTLSAuth": true,
        "enableOpClientTLSAuth": true,
        "eventHubPort": 7054,
        "opServicePort": 7443,
        "adminCert":"-----BEGIN CERTIFICATE-----\nMIICGjCCAcCgAwIBAgIRAIPRwJHVLhHK47XK0BbFZJswCgYIKoZIzj0EAwIwczEL\nMAkGA1UEBhMCVVMxEzARBgNVBAgTCkNhbGlmb3JuaWExFjAUBgNVBAcTDVNhbiBG\ncmFuY2lzY28xGTAXBgNVBAoTEG9yZzIuZXhhbXBsZS5jb20xHDAaBgNVBAMTE2Nh\nLm9yZzIuZXhhbXBsZS5jb20wHhcNMTcwNjIzMTIzMzE5WhcNMjcwNjIxMTIzMzE5\nWjBbMQswCQYDVQQGEwJVUzETMBEGA1UECBMKQ2FsaWZvcm5pYTEWMBQGA1UEBxMN\nU2FuIEZyYW5jaXNjbzEfMB0GA1UEAwwWVXNlcjFAb3JnMi5leGFtcGxlLmNvbTBZ\nMBMGByqGSM49AgEGCCqGSM49AwEHA0IABBd9SsEiFH1/JIb3qMEPLR2dygokFVKW\neINcB0Ni4TBRkfIWWUJeCANTUY11Pm/+5gs+fBTqBz8M2UzpJDVX7+2jTTBLMA4G\nA1UdDwEB/wQEAwIHgDAMBgNVHRMBAf8EAjAAMCsGA1UdIwQkMCKAIKfUfvpGproH\ncwyFD+0sE3XfJzYNcif0jNwvgOUFZ4AFMAoGCCqGSM49BAMCA0gAMEUCIQC8NIMw\ne4ym/QRwCJb5umbONNLSVQuEpnPsJrM/ssBPvgIgQpe2oYa3yO3USro9nBHjpM3L\nKsFQrpVnF8O6hoHOYZQ=\n-----END CERTIFICATE-----",
        "adminKey":"-----BEGIN PRIVATE KEY-----\nMIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQgmHG6n4ZvwUeV4jCp\nkvAmGSQKZ+vOYsyzRZgYwORO+vChRANCAAQXfUrBIhR9fySG96jBDy0dncoKJBVS\nlniDXAdDYuEwUZHyFllCXggDU1GNdT5v/uYLPnwU6gc/DNlM6SQ1V+/t\n-----END PRIVATE KEY-----",
        "serverCert":"-----BEGIN CERTIFICATE-----\nMIICGjCCAcCgAwIBAgIRAIPRwJHVLhHK47XK0BbFZJswCgYIKoZIzj0EAwIwczEL\nMAkGA1UEBhMCVVMxEzARBgNVBAgTCkNhbGlmb3JuaWExFjAUBgNVBAcTDVNhbiBG\ncmFuY2lzY28xGTAXBgNVBAoTEG9yZzIuZXhhbXBsZS5jb20xHDAaBgNVBAMTE2Nh\nLm9yZzIuZXhhbXBsZS5jb20wHhcNMTcwNjIzMTIzMzE5WhcNMjcwNjIxMTIzMzE5\nWjBbMQswCQYDVQQGEwJVUzETMBEGA1UECBMKQ2FsaWZvcm5pYTEWMBQGA1UEBxMN\nU2FuIEZyYW5jaXNjbzEfMB0GA1UEAwwWVXNlcjFAb3JnMi5leGFtcGxlLmNvbTBZ\nMBMGByqGSM49AgEGCCqGSM49AwEHA0IABBd9SsEiFH1/JIb3qMEPLR2dygokFVKW\neINcB0Ni4TBRkfIWWUJeCANTUY11Pm/+5gs+fBTqBz8M2UzpJDVX7+2jTTBLMA4G\nA1UdDwEB/wQEAwIHgDAMBgNVHRMBAf8EAjAAMCsGA1UdIwQkMCKAIKfUfvpGproH\ncwyFD+0sE3XfJzYNcif0jNwvgOUFZ4AFMAoGCCqGSM49BAMCA0gAMEUCIQC8NIMw\ne4ym/QRwCJb5umbONNLSVQuEpnPsJrM/ssBPvgIgQpe2oYa3yO3USro9nBHjpM3L\nKsFQrpVnF8O6hoHOYZQ=\n-----END CERTIFICATE-----",
        "serverKey":"-----BEGIN PRIVATE KEY-----\nMIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQgmHG6n4ZvwUeV4jCp\nkvAmGSQKZ+vOYsyzRZgYwORO+vChRANCAAQXfUrBIhR9fySG96jBDy0dncoKJBVS\nlniDXAdDYuEwUZHyFllCXggDU1GNdT5v/uYLPnwU6gc/DNlM6SQ1V+/t\n-----END PRIVATE KEY-----",
        "tlsServerCert":"-----BEGIN CERTIFICATE-----\nMIICGjCCAcCgAwIBAgIRAIPRwJH7LhHK47XK0BbFzJswCgYIKoZIzj0EAwIwczEL\nMAkGA1UEBhMCVVMxEzARBgNVBAgTCkNhbGlmb3JuaWExFjAUBgNVBAcTDVNhbiBG\ncmFuY2lzY28xGTAXBgNVBAoTEG9yZzIuZXhhbXBsZS5jb20xHDAaBgNVBAMTE2Nh\nLm9yZzIuZXhhbXBsZS5jb20wHhcNMTcwNjIzMTIzMzE5WhcNMjcwNjIxMTIzMzE5\nWjBbMQswCQYDVQQGEwJVUzETMBEGA1UECBMKQ2FsaWZvcm5pYTEWMBQGA1UEBxMN\nU2FuIEZyYW5jaXNjbzEfMB0GA1UEAwwWVXNlcjFAb3JnMi5leGFtcGxlLmNvbTBZ\nMBMGByqGSM49AgEGCCqGSM49AwEHA0IABBd9SsEiFH1/JIb3qMEPLR2dygokFVKW\neINcB0Ni4TBRkfIWWUJeCANTUY11Pm/+5gs+fBTqBz8M2UzpJDVX7+2jTTBLMA4G\nA1UdDwEB/wQEAwIHgDAMBgNVHRMBAf8EAjAAMCsGA1UdIwQkMCKAIKfUfvpGproH\ncwyFD+0sE3XfJzYNcif0jNwvgOUFZ4AFMAoGCCqGSM49BAMCA0gAMEUCIQC8NIMw\ne4ym/QRwCJb5umbONNLSVQuEpnPsJrM/ssBPvgIgQpe2oYa3yO3USro9nBHjpM3L\nKsFQrpVnF8O6hoHOYZQ=\n-----END CERTIFICATE-----",
        "tlsServerKey":"-----BEGIN PRIVATE KEY-----\nMIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQgmHG6n4ZvwUeV4jCp\nkvAmGSQKZ+vOYsyzRZgYwORO+vChRANCAAQXfUrBIhR9fySG96jBDy0dncoKJBVS\nlniDXAdDYuEwUZHyFllCXggDU1GNdT5v/uYLPnwU6gc/DNlM6SQ1V+/t\n-----END PRIVATE KEY-----",
        "tlsClientCert":"-----BEGIN CERTIFICATE-----\nMIICGjCCAcCgAwIBAgIRAIPRwJH7LhHK47XK0BbFzJswCgYIKoZIzj0EAwIwczEL\nMAkGA1UEBhMCVVMxEzARBgNVBAgTCkNhbGlmb3JuaWExFjAUBgNVBAcTDVNhbiBG\ncmFuY2lzY28xGTAXBgNVBAoTEG9yZzIuZXhhbXBsZS5jb20xHDAaBgNVBAMTE2Nh\nLm9yZzIuZXhhbXBsZS5jb20wHhcNMTcwNjIzMTIzMzE5WhcNMjcwNjIxMTIzMzE5\nWjBbMQswCQYDVQQGEwJVUzETMBEGA1UECBMKQ2FsaWZvcm5pYTEWMBQGA1UEBxMN\nU2FuIEZyYW5jaXNjbzEfMB0GA1UEAwwWVXNlcjFAb3JnMi5leGFtcGxlLmNvbTBZ\nMBMGByqGSM49AgEGCCqGSM49AwEHA0IABBd9SsEiFH1/JIb3qMEPLR2dygokFVKW\neINcB0Ni4TBRkfIWWUJeCANTUY11Pm/+5gs+fBTqBz8M2UzpJDVX7+2jTTBLMA4G\nA1UdDwEB/wQEAwIHgDAMBgNVHRMBAf8EAjAAMCsGA1UdIwQkMCKAIKfUfvpGproH\ncwyFD+0sE3XfJzYNcif0jNwvgOUFZ4AFMAoGCCqGSM49BAMCA0gAMEUCIQC8NIMw\ne4ym/QRwCJb5umbONNLSVQuEpnPsJrM/ssBPvgIgQpe2oYa3yO3USro9nBHjpM3L\nKsFQrpVnF8O6hoHOYZQ=\n-----END CERTIFICATE-----",
        "tlsClientKey":"-----BEGIN PRIVATE KEY-----\nMIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQgmHG6n4ZvwUeV4jCp\nkvAmGSQKZ+vOYsyzRZgYwORO+vChRANCAAQXfUrBIhR9fySG96jBDy0dncoKJBVS\nlniDXAdDYuEwUZHyFllCXggDU1GNdT5v/uYLPnwU6gc/DNlM6SQ1V+/t\n-----END PRIVATE KEY-----",
        "tlsOpsServerCert":"-----BEGIN CERTIFICATE-----\nMIICGjCCAcCgAwIBAgIRAIPRwJH7LhHK47XK0BbFzJswCgYIKoZIzj0EAwIwczEL\nMAkGA1UEBhMCVVMxEzARBgNVBAgTCkNhbGlmb3JuaWExFjAUBgNVBAcTDVNhbiBG\ncmFuY2lzY28xGTAXBgNVBAoTEG9yZzIuZXhhbXBsZS5jb20xHDAaBgNVBAMTE2Nh\nLm9yZzIuZXhhbXBsZS5jb20wHhcNMTcwNjIzMTIzMzE5WhcNMjcwNjIxMTIzMzE5\nWjBbMQswCQYDVQQGEwJVUzETMBEGA1UECBMKQ2FsaWZvcm5pYTEWMBQGA1UEBxMN\nUFuIEZyYW5jaXNjbzEfMB0GA1UEAwwWVXNlcjFAb3JnMi5leGFtcGxlLmNvbTBZ\nMBMGByqGSM49AgEGCCqGSM49AwEHA0IABBd9SsEiFH1/JIb3qMEPLR2dygokFVKW\neINcB0Ni4TBRkfIWWUJeCANTUY11Pm/+5gs+fBTqBz8M2UzpJDVX7+2jTTBLMA4G\nA1UdDwEB/wQEAwIHgDAMBgNVHRMBAf8EAjAAMCsGA1UdIwQkMCKAIKfUfvpGproH\ncwyFD+0sE3XfJzYNcif0jNwvgOUFZ4AFMAoGCCqGSM49BAMCA0gAMEUCIQC8NIMw\ne4ym/QRwCJb5umbONNLSVQuEpnPsJrM/ssBPvgIgQpe2oYa3yO3USro9nBHjpM3L\nKsFQrpVnF8O6hoHOYZQ=\n-----END CERTIFICATE-----",
        "tlsOpsServerKey":"-----BEGIN PRIVATE KEY-----\nMIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQgmHG6n4ZvwUeV4jCp\nkvAmGSQKZ+vOYsyzRZgYwORO+vChRANCAAQXfUrBIhR9fySG96jBDy0dncoKJBVS\nlniDXAdDYuEwUZHyFllCXgg1GNdT5v/uYLPnwU6gc/DNlM6SQ1V+/t\n-----END PRIVATE KEY-----",
        "tlsServerRootCAId": "5e54eb5fc4e9336a6bcd84bd",
        "tlsClientRootCAId": "5e54eb8cc4e9336a6bcd84be",
        "tlsOpsServerRootCAId": "5e54eb5fc4e9336a6bcd84bd",
        "tlsOpsClientRootCAId": "5e54eb8cc4e9336a6bcd84be",
        "stateDB":null
    }],
    requestResponse:''
}
export default function orgPeersReducer(state=initialState,action){
    return state;
}