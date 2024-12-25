package docker

import (
	"github.com/docker/go-connections/nat"
	"strings"
)

type PullMessage struct {
	Id             string `json:"id"`
	Status         string `json:"status"`
	Progress       string `json:"progress"`
	ProgressDetail struct {
		Current float64 `json:"current"`
		Total   float64 `json:"total"`
	} `json:"progressDetail"`
}

type BuildMessage struct {
	Stream      string `json:"stream"`
	ErrorDetail struct {
		Message string `json:"message"`
	} `json:"errorDetail"`
	PullMessage
}

type PullProgress struct {
	Downloading float64 `json:"downloading"`
	Extracting  float64 `json:"extracting"`
}

// 容器相关

type VolumeItem struct {
	Host       string `json:"host"`
	Dest       string `json:"dest"`
	Permission string `json:"permission"` // readonly or write
	InImage    bool   `json:"inImage"`
}

type LinkItem struct {
	Name   string `json:"name"`
	Alise  string `json:"alise"`
	Volume bool   `json:"volume"`
}

type NetworkItem struct {
	Name  string   `json:"name"`
	Alise []string `json:"alise"`
	IpV4  string   `json:"ipV4"`
	IpV6  string   `json:"ipV6"`
}

type EnvItem struct {
	Label   string `json:"label,omitempty" yaml:"label,omitempty"`
	Default string `json:"default,omitempty" yaml:"default,omitempty"`
	Name    string `json:"name"`
	Value   string `json:"value"`
}

type ValueItem struct {
	Name  string `json:"name"`
	Value string `json:"value"`
}

type DeviceItem struct {
	Host string `json:"host"`
	Dest string `json:"dest"`
}

type PortItem struct {
	HostIp   string `json:"hostIp"`
	Host     string `json:"host"`
	Dest     string `json:"dest"`
	Protocol string `json:"protocol"`
}

func (self *PortItem) Parse() (hostPort nat.PortBinding, destPort nat.Port) {
	if hostIp, port, exists := strings.Cut(self.Host, ":"); exists {
		hostPort.HostIP = hostIp
		hostPort.HostPort = port
	} else {
		hostPort.HostIP = self.HostIp
		hostPort.HostPort = self.Host
	}
	if port, protocol, exists := strings.Cut(self.Dest, "/"); exists {
		destPort, _ = nat.NewPort(protocol, port)
	} else {
		destPort, _ = nat.NewPort(self.Protocol, self.Dest)
	}
	return hostPort, destPort
}

type LogDriverItem struct {
	Driver  string `json:"driver"`
	MaxFile string `json:"maxFile"`
	MaxSize string `json:"maxSize"`
}

type GpusItem struct {
	Enable       bool     `json:"enable"`
	Device       []string `json:"device"`
	Capabilities []string `json:"capabilities"`
}

type HookItem struct {
	ContainerStart  string `json:"containerStart"`
	ContainerCreate string `json:"containerCreate"`
}

type HealthcheckItem struct {
	ShellType string `json:"shellType"`
	Cmd       string `json:"cmd"`
	Interval  int    `json:"interval"`
	Timeout   int    `json:"timeout"`
	Retries   int    `json:"retries"`
}

type NetworkCreateItem struct {
	Address string `json:"address"`
	Subnet  string `json:"subnet"`
	Gateway string `json:"gateway"`
}

type ImagePlatform struct {
	Type string
	Arch string
}
